from pydantic import BaseModel, EmailStr


class JWTStaffData(BaseModel):
    id: str
    email: EmailStr


class JWTPayload(BaseModel):
    user: JWTStaffData
    sub: str
    exp: int
