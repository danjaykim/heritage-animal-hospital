from pydantic import BaseModel, EmailStr
from datetime import datetime


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
    expiration: datetime
    used: bool
