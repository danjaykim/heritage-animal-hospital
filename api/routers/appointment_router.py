from fastapi import APIRouter, Depends, HTTPException, Response
from queries.appointment_queries import AppointmentQueries
from models.appointments import AppointmentRequest, AppointmentResponse
from utils.exceptions import AppointmentDatabaseError

router = APIRouter(tags=["Appointments"], prefix="/api/appointments")


@router.get("/", response_model=list[AppointmentResponse])
def all_appointments(queries: AppointmentQueries = Depends()):
    try:
        appointments = queries.get_all_appointments()
        if not appointments:
            raise HTTPException(
                status_code=404, detail="Appointments not found"
            )
        return appointments
    except AppointmentDatabaseError as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve appointments: {str(e)}",
        )


@router.get("/{id}", response_model=AppointmentResponse)
def get_appointment(id: int, queries: AppointmentQueries = Depends()):
    try:
        appointment = queries.get_appointment(id)
        if not appointment:
            raise HTTPException(
                status_code=404, detail="Appointment not found"
            )
        return appointment
    except AppointmentDatabaseError as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to retrieve appointment id {id}: {str(e)}",
        )
