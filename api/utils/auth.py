import os
import bcrypt
import datetime
from calendar import timegm
from fastapi import Cookie
from jose import JWTError, jwt
from jose.constants import ALGORITHMS
from typing import Annotated, Optional
from models.jwt import JWTStaffData, JWTPayload
from models.clinic_staff import ClinicStaffResponse


ALGORITHM = ALGORITHMS.HS256

SIGNING_KEY = os.environ.get("SIGNING_KEY")
if not SIGNING_KEY:
    raise ValueError("SIGNING_KEY environment variable is not set")


def hash_password(plain_password: str, salt_rounds: int = 12) -> str:
    """
    Hashes the input password
    Default bcrypt salt rounds set at 12
    """
    salt = bcrypt.gensalt(rounds=salt_rounds)
    return bcrypt.hashpw(plain_password, salt).decode()


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
    try:
        payload = jwt.decode(token, SIGNING_KEY, algorithms=[ALGORITHM])
        return JWTPayload(**payload)
    except (JWTError, AttributeError) as e:
        print(e)
    return None


async def try_get_jwt_user(
    fast_api_token: Annotated[str | None, Cookie()] = None
) -> Optional[JWTStaffData]:
    if not fast_api_token:
        return
    payload = await decode_jwt(fast_api_token)
    if not payload:
        return
    return payload.user


async def generate_jwt(clinic_staff: ClinicStaffResponse) -> str:
    exp = timegm(
        (
            datetime.datetime.now(datetime.timezone.utc)
            + datetime.timedelta(hours=1)
        ).utctimetuple()
    )
    jwt_data = JWTPayload(
        exp=exp,
        sub=clinic_staff.id,
        user=JWTStaffData(
            id=clinic_staff.id,
            email=clinic_staff.email,
        ),
    )
    encoded_jwt = jwt.encode(
        jwt_data.model_dump(), SIGNING_KEY, algorithm=ALGORITHM.HS256
    )
    return encoded_jwt
