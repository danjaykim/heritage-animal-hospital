from pydantic import BaseModel, EmailStr
from datetime import date


class InviteTokenRequest(BaseModel):
    """
    Represents a request to create an invite
    """

    email: EmailStr


class InviteTokenResponse(BaseModel):
    """
    Represents the response of creating an invite
    """

    token: str
    email: EmailStr
    expiration: date
    used: bool
