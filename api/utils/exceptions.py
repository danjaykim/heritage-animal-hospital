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
    def __init__(self, detail: str = "Invalid Password Format"):
        self.detail = detail

    def __str__(self):
        return self.detail
