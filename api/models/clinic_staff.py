from pydantic import BaseModel, EmailStr
from datetime import datetime
from enum import Enum


class RoleType(str, Enum):
    admin = "admin"
    vet = "vet"
    tech = "tech"
    assistant = "assistant"
    receptionist = "receptionist"


class ClinicStaffBase(BaseModel):
    """
    Represents Clinic Staff
    """

    email: EmailStr
    first_name: str
    last_name: str
    phone: str
    role: RoleType


class ClinicStaffLoginRequest(BaseModel):
    """
    Represents a request to login a staff member
    """

    email: EmailStr
    password: str


class ClinicStaffRequest(ClinicStaffBase):
    """
    Represents a staff member POST (Admin creates staff member manually)
    """

    hashed_password: str


class ClinicStaffResponse(ClinicStaffBase):
    """
    Represents a staff member GET
    """

    id: int
    created_at: datetime


class ClinicStaffRegisterRequest(ClinicStaffBase):
    """
    Represents a request to register a staff member with invite token (Creating new staff member via form)
    """

    password: str
    token: str
