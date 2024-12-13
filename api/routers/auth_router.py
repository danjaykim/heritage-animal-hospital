from fastapi import (
    APIRouter,
    Depends,
    Request,
    Response,
    HTTPException,
    status,
)
from models.clinic_staff import (
    ClinicStaffLoginRequest,
    ClinicStaffResponse,
    ClinicStaffRegisterRequest,
    ClinicStaffDBModel,
)
from models.jwt import JWTStaffData
from queries.clinic_staff_queries import ClinicStaffQueries
from queries.invite_token_queries import InviteTokenQueries
from utils.auth import (
    verify_password,
    generate_jwt,
    try_get_jwt_user,
    hash_password,
)
from datetime import datetime

router = APIRouter(tags=["Authentication"], prefix="/api/auth")


@router.post("/login", response_model=dict)
async def login(
    request: ClinicStaffLoginRequest,
    http_request: Request,
    response: Response,
    queries: ClinicStaffQueries = Depends(),
):
    try:
        clinic_staff_member = queries.get_clinic_staff_by_email(request.email)

        if not clinic_staff_member:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email or password",
            )

        if not verify_password(
            request.password, clinic_staff_member.hashed_password
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email or password",
            )

        clinic_staff_response = ClinicStaffResponse(
            **{
                key: value
                for key, value in clinic_staff_member.model_dump().items()
                if key != "hashed_password"
            }
        )

        token = await generate_jwt(clinic_staff_response)
        secure = (
            False
            if http_request.headers.get("origin") == "localhost"
            else True
        )
        response.set_cookie(
            key="fast_api_token",
            value=token,
            httponly=True,
            samesite="lax",
            secure=secure,
        )

        return {
            "message": "Login Successful",
            "clinic_staff_member": clinic_staff_response,
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error retrieving request: {str(e)}",
        )


@router.post("/register", response_model=dict)
async def register(
    staff: ClinicStaffRegisterRequest,
    request: Request,
    response: Response,
    clinic_queries: ClinicStaffQueries = Depends(),
    token_queries: InviteTokenQueries = Depends(),
):
    try:
        invite_token = token_queries.get_invite_token(staff.token)

        valid_roles = {"admin", "vet", "tech", "assistant", "receptionist"}

        if not invite_token:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid Invite Token",
            )
        if invite_token.used:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Token has already been used",
            )
        if invite_token.expiration < datetime.now():
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Token is expired",
            )
        if invite_token.email != staff.email:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Incorrect Email Address",
            )
        if staff.role not in valid_roles:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid Role Selected",
            )

        hashed_password = hash_password(staff.password)

        new_staff_model = ClinicStaffDBModel(
            email=staff.email,
            first_name=staff.first_name,
            last_name=staff.last_name,
            phone=staff.phone,
            role=staff.role,
            hashed_password=hashed_password,
        )

        new_staff = clinic_queries.create_clinic_staff(new_staff_model)

        token_queries.mark_token_used(staff.token)

        jwt_token = await generate_jwt(new_staff)
        secure = (
            False if request.headers.get("origin") == "localhost" else True
        )
        response.set_cookie(
            key="fast_api_token",
            value=jwt_token,
            httponly=True,
            samesite="lax",
            secure=secure,
        )

        return {
            "message": "Registration Successful",
            "new_staff_member": new_staff,
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Error retrieving request: {str(e)}",
        )


@router.get("/authenticate", response_model=JWTStaffData)
def authenticate(
    clinic_staff_member: ClinicStaffResponse = Depends(try_get_jwt_user),
):
    if not clinic_staff_member:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Not logged in"
        )
    return clinic_staff_member
