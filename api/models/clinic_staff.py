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
    email: EmailStr
    first_name: str
    last_name: str
    phone: str
    role: RoleType


class ClinicStaffLoginRequest(BaseModel):
    email: EmailStr
    password: str


class ClinicStaffDBModel(ClinicStaffBase):
    id: int
    hashed_password: str


class ClinicStaffResponse(ClinicStaffBase):
    id: int
    created_at: datetime


class ClinicStaffRegisterRequest(ClinicStaffBase):
    password: str
    token: str
