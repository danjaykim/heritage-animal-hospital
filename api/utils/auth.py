import os
import re
import uuid
import bcrypt
import datetime
from calendar import timegm
from fastapi import Cookie, Depends, HTTPException, status
from jose import JWTError, jwt
from jose.constants import ALGORITHMS
from typing import Annotated, Optional
from utils.exceptions import AuthException
from models.jwt import JWTStaffData, JWTPayload
from models.clinic_staff import ClinicStaffResponse


ALGORITHM = ALGORITHMS.HS256

SIGNING_KEY = os.environ.get("SIGNING_KEY")
if not SIGNING_KEY:
    raise ValueError("SIGNING_KEY environment variable is not set")


def required_roles(roles: list) -> JWTStaffData:
    def check_role(
        clinic_staff: JWTStaffData = Depends(try_get_jwt_user),
    ) -> JWTStaffData:
        if not clinic_staff:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="No logged in staff member",
            )
        if clinic_staff.role not in roles:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Access to this resource is denied",
            )
        return clinic_staff

    return check_role


def validate_registered_password(password: str) -> None:
    """
    Verifies the registering staff member's password passes all conditions
    """
    errors = []

    if len(password) < 8:
        errors.append("Password must be a minimum of 8 characters long")
    if not re.search(r"\d", password):
        errors.append("Password must contain at least one number")
    if not re.search(r"[a-z]", password):
        errors.append("Password must contain at least one lowercase letter")
    if not re.search(r"[A-Z]", password):
        errors.append("Password must contain at least one uppercase")
    if not re.search(r"[!@#$%^&*?]", password):
        errors.append("Password must contain at least one special character")

    if errors:
        raise AuthException(", ".join(errors))


def generate_token() -> str:
    """
    Generates a unique string token using UUID4
    """
    return str(uuid.uuid4())


def hash_password(plain_password: str, salt_rounds: int = 12) -> str:
    """
    Hashes the input password
    Default bcrypt salt rounds set at 12
    """
    password_bytes = plain_password.encode()
    salt = bcrypt.gensalt(rounds=salt_rounds)
    return bcrypt.hashpw(password_bytes, salt).decode()


def verify_password(plain_password: str, hashed_password: bytes) -> bool:
    """
    This verifies the user's password by hashing the plain password
    and then compares it to the hashed password from the db
    Added try, except block to ensure False if hashed_password isn't a valid hash
    """
    try:
        return bcrypt.checkpw(
            plain_password.encode(), hashed_password.encode()
        )
    except ValueError:
        return False


async def decode_jwt(token: str) -> Optional[JWTPayload]:
    """
    Decodes the JWT from a token string
    """
    try:
        payload = jwt.decode(token, SIGNING_KEY, algorithms=[ALGORITHM])
        return JWTPayload(**payload)
    except (JWTError, AttributeError) as e:
        print(e)
    return None


async def try_get_jwt_user(
    fast_api_token: Annotated[str | None, Cookie()] = None
) -> Optional[JWTStaffData]:
    """
    Checks the JWT token from the cookie and attempts to get
    the user from the payload of the JWT

    Can be dependency injected into a route
    """
    if not fast_api_token:
        return
    payload = await decode_jwt(fast_api_token)
    if not payload:
        return
    return payload.user


async def generate_jwt(clinic_staff: ClinicStaffResponse) -> str:
    """
    Generates a new JWT token with staff member's info
    """
    exp = timegm(
        (
            datetime.datetime.now(datetime.timezone.utc)
            + datetime.timedelta(hours=1)
        ).utctimetuple()
    )
    jwt_data = JWTPayload(
        exp=exp,
        sub=str(clinic_staff.id),
        user=JWTStaffData(
            id=str(clinic_staff.id),
            email=clinic_staff.email,
            first_name=clinic_staff.first_name,
            last_name=clinic_staff.last_name,
            phone=clinic_staff.phone,
            role=clinic_staff.role,
        ),
    )
    encoded_jwt = jwt.encode(
        jwt_data.model_dump(), SIGNING_KEY, algorithm=ALGORITHM
    )
    return encoded_jwt
