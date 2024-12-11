import os
import psycopg
from typing import Optional
from pydantic import EmailStr
from psycopg.rows import class_row
from psycopg_pool import ConnectionPool
from models.clinic_staff import (
    ClinicStaffLoginRequest,
    ClinicStaffDBModel,
    ClinicStaffRegisterRequest,
    ClinicStaffResponse,
)
from utils.exceptions import DatabaseURLException, ClinicStaffDatabaseError


DATABASE_URL = os.environ.get("DATABASE_URL")
if DATABASE_URL is None:
    raise DatabaseURLException(
        "You forgot to define DATABASE_URL in your environment"
    )


pool = ConnectionPool(DATABASE_URL)


class ClinicStaffQueries:
    def get_all_clinic_staff(self) -> list[ClinicStaffResponse]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(ClinicStaffResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT * FROM clinic_staff;
                        """
                    )
                    all_clinic_staff = result.fetchall()
                    return all_clinic_staff
        except psycopg.Error as e:
            raise ClinicStaffDatabaseError(
                f"Error retrieving all clinic staff information: {str(e)}"
            )

    def get_clinic_staff_by_id(self, id: int) -> Optional[ClinicStaffResponse]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(ClinicStaffResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT * FROM clinic_staff
                            WHERE id = %s;
                        """,
                        [id],
                    )
                    clinic_staff = result.fetchone()
                    if not clinic_staff:
                        return None
                    return clinic_staff
        except psycopg.Error as e:
            raise ClinicStaffDatabaseError(
                f"Error retrieving clinic staff member with id: {id}: {str(e)}"
            )

    def get_clinic_staff_by_email(
        self, email: EmailStr
    ) -> Optional[ClinicStaffDBModel]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(ClinicStaffDBModel)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT
                                id,
                                email,
                                first_name,
                                last_name,
                                phone,
                                role,
                                hashed_password
                            FROM clinic_staff
                            WHERE email = %s;
                        """,
                        [email],
                    )
                    clinic_staff = result.fetchone()
                    if not clinic_staff:
                        return None
                    return clinic_staff
        except psycopg.Error as e:
            raise ClinicStaffDatabaseError(
                f"Unable to retrieve clinic staff member: {str(e)}"
            )
