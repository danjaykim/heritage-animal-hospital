from pydantic import BaseModel, EmailStr
from models.clinic_staff import RoleType


class JWTStaffData(BaseModel):
    id: str
    email: EmailStr
    first_name: str
    last_name: str
    phone: str
    role: RoleType


class JWTPayload(BaseModel):
    user: JWTStaffData
    sub: str
    exp: int
