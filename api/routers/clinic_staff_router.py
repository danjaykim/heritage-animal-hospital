from fastapi import APIRouter, Depends, HTTPException
from queries.clinic_staff_queries import ClinicStaffQueries
from models.clinic_staff import ClinicStaffResponse
from models.jwt import JWTStaffData
from utils.exceptions import ClinicStaffDatabaseError
from utils.auth import try_get_jwt_user


router = APIRouter(tags=["Clinic Staff"], prefix="/api/clinic-staff")


@router.get("/", response_model=list[ClinicStaffResponse])
def get_all_clinic_staff(
    queries: ClinicStaffQueries = Depends(),
    clinic_staff: JWTStaffData = Depends(try_get_jwt_user),
):
    try:
        if not clinic_staff:
            raise HTTPException(
                status_code=401, detail="Not authorized to view clinic staff"
            )
        all_clinic_staff = queries.get_all_clinic_staff()
        if not all_clinic_staff:
            raise HTTPException(
                status_code=404, detail="Clinic staff not found"
            )
        return all_clinic_staff
    except ClinicStaffDatabaseError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve all clinic staff: {str(e)}",
        )


@router.get("/{id}", response_model=ClinicStaffResponse)
def get_clinic_staff_by_id(
    id: int,
    queries: ClinicStaffQueries = Depends(),
    clinic_staff_member: JWTStaffData = Depends(try_get_jwt_user),
):
    try:
        if not clinic_staff_member:
            raise HTTPException(
                status_code=401,
                detail="Not authorized to view clinic staff member",
            )
        clinic_staff = queries.get_clinic_staff_by_id(id)
        if not clinic_staff:
            raise HTTPException(
                status_code=404, detail="Clinic staff member not found"
            )
        return clinic_staff
    except ClinicStaffDatabaseError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve clinic staff member: {str(e)}",
        )
