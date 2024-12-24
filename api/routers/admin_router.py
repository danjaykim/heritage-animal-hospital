from fastapi import APIRouter, Depends, HTTPException
from queries.invite_token_queries import InviteTokenQueries
from models.invite_tokens import InviteTokenRequest, InviteTokenResponse
from models.jwt import JWTStaffData
from utils.exceptions import AdminDatabaseError
from utils.auth import generate_token, required_roles


router = APIRouter(tags=["Admin"], prefix="/api/admin")


@router.post("/create-invite", response_model=InviteTokenResponse)
def create_invite_token(
    request: InviteTokenRequest,
    queries: InviteTokenQueries = Depends(),
    clinic_staff: JWTStaffData = Depends(required_roles(["admin", "vet"])),
):
    token = generate_token()
    try:
        invite_token = queries.create_invite_token(request.email, token)
        if not token:
            raise HTTPException(
                status_code=404, detail="Unable to create token"
            )
        return invite_token
    except AdminDatabaseError as e:
        raise HTTPException(
            status_code=500,
            detail=f"Routing error when attempting to create invite token: {str(e)}",
        )
