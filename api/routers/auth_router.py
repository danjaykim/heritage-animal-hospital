from fastapi import APIRouter, Depends, Response, HTTPException, status
from models.clinic_staff import ClinicStaffLoginRequest, ClinicStaffResponse
from queries.clinic_staff_queries import ClinicStaffQueries
from utils.auth import verify_password, generate_jwt


router = APIRouter(tags=["Authentication"], prefix="/api/auth")


@router.post("/login", response_model=dict)
def login(
    request: ClinicStaffLoginRequest,
    response: Response,
    queries: ClinicStaffQueries = Depends(),
):
    try:
        clinic_staff_member = queries.get_clinic_staff_by_email(request.email)
        print(clinic_staff_member)

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

        token = generate_jwt(clinic_staff_response)

        secure = (
            False if request.headers.get("origin") == "localhost" else True
        )

        response.set_cookie(
            key="fast_api_token",
            value=token,
            httponly=True,
            samesite="lax",
            secure=secure,
        )

        return {"message": "Login Successful", "token": token}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error retrieving request: {str(e)}",
        )
