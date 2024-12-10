from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from queries.appointment_queries import AppointmentQueries
from models.appointments import (
    AppointmentRequest,
    AppointmentResponse,
    AppointmentUpdateRequest,
)
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
            detail=f"Routing error when attempting to retrieve appointment: {str(e)}",
        )


@router.post("/", response_model=AppointmentResponse)
def create_appointment(
    new_appt: AppointmentRequest, queries: AppointmentQueries = Depends()
):
    try:
        new_appointment = queries.create_appointment(new_appt)
        return new_appointment
    except AppointmentDatabaseError as e:
        print(e)
        raise HTTPException(
            status_code=400,
            detail=f"Routing error when attempting to create the appointment: {str(e)}",
        )


@router.put("/{id}", response_model=AppointmentResponse)
def update_appointment(
    id: int,
    appt: AppointmentUpdateRequest,
    queries: AppointmentQueries = Depends(),
):
    try:
        updated_appointment = queries.update_appointment(id, appt)
        return updated_appointment
    except AppointmentDatabaseError as e:
        print(e)
        raise HTTPException(
            status_code=400,
            detail=f"Routing error when attempting to update the appointment: {str(e)}",
        )


@router.delete("/{id}", response_model=None)
def delete_appointment(id: int, queries: AppointmentQueries = Depends()):
    try:
        queries.delete_appointment(id)
        return JSONResponse(
            content={
                "message": f"Appointment id: {id} has been successfully deleted"
            },
            status_code=200,
        )
    except AppointmentDatabaseError as e:
        print(e)
        raise HTTPException(
            status_code=400,
            detail=f"Routing error when attempting to delete appointment: {str(e)}",
        )
