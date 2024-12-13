from fastapi import HTTPException, status


class DatabaseURLException(Exception):
    pass


class AppointmentDatabaseError(Exception):
    pass


class ClinicStaffDatabaseError(Exception):
    pass


class InviteTokenDatabaseError(Exception):
    pass


class AdminDatabaseError(Exception):
    pass


class AuthException(Exception):
    @staticmethod
    def invalid_password(detail: str = "Invalid Password Format"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail=detail
        )
