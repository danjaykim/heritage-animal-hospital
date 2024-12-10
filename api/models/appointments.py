from pydantic import BaseModel, EmailStr
from datetime import date, datetime
from enum import Enum


class TimeOfDay(str, Enum):
    AM = "AM"
    PM = "PM"


class AppointmentBase(BaseModel):
    """
    Represents an appointment
    """

    first_name: str
    last_name: str
    phone: str
    email: EmailStr
    pet_name: str
    pet_type: str
    reason: str
    preferred_date: date
    preferred_time: TimeOfDay
    new_client: bool


class AppointmentRequest(AppointmentBase):
    """
    Represents an appointment POST
    """

    pass


class AppointmentResponse(AppointmentBase):
    """
    Represents an appointment GET
    """

    id: int
    created_on: datetime
