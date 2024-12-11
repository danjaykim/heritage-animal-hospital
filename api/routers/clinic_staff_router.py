from fastapi import APIRouter, Depends, HTTPException
from queries.clinic_staff_queries import ClinicStaffQueries
from models.clinic_staff import (
    ClinicStaffLoginRequest,
    ClinicStaffRegisterRequest,
    ClinicStaffRequest,
    ClinicStaffResponse,
)
from utils.exceptions import ClinicStaffDataBaseError


router = APIRouter(tags=["Clinic Staff"], prefix="/api/clinic-staff")


@router.get("/", response_model=list[ClinicStaffResponse])
def get_all_clinic_staff(queries: ClinicStaffQueries = Depends()):
    try:
        all_clinic_staff = queries.get_all_clinic_staff()
        if not all_clinic_staff:
            raise HTTPException(
                status_code=404, detail="Clinic staff not found"
            )
        return all_clinic_staff
    except ClinicStaffDataBaseError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve all clinic staff: {str(e)}",
        )


@router.get("/{id}", response_model=ClinicStaffResponse)
def get_clinic_staff(id: int, queries: ClinicStaffQueries = Depends()):
    try:
        clinic_staff = queries.get_clinic_staff(id)
        if not clinic_staff:
            raise HTTPException(
                status_code=404, detail="Clinic staff member not found"
            )
        return clinic_staff
    except ClinicStaffDataBaseError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve clinic staff member: {str(e)}",
        )
