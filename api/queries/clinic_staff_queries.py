import os
import psycopg
from typing import Optional
from pydantic import EmailStr
from psycopg.rows import class_row
from psycopg_pool import ConnectionPool
from models.clinic_staff import (
    ClinicStaffDBModel,
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
                                hashed_password,
                                created_at
                            FROM clinic_staff
                            WHERE email = %s;
                        """,
                        [email.lower()],
                    )
                    clinic_staff = result.fetchone()
                    if not clinic_staff:
                        return None
                    return clinic_staff
        except psycopg.Error as e:
            raise ClinicStaffDatabaseError(
                f"Unable to retrieve clinic staff member: {str(e)}"
            )

    def create_clinic_staff(
        self, staff: ClinicStaffDBModel
    ) -> ClinicStaffResponse:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(ClinicStaffResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            INSERT INTO clinic_staff (
                                email,
                                first_name,
                                last_name,
                                phone,
                                role,
                                hashed_password
                            )
                            VALUES (
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s
                            )
                            RETURNING
                                id,
                                email,
                                first_name,
                                last_name,
                                phone,
                                role,
                                created_at;
                        """,
                        [
                            staff.email.lower(),
                            staff.first_name,
                            staff.last_name,
                            staff.phone,
                            staff.role,
                            staff.hashed_password,
                        ],
                    )
                    new_clinic_staff_member = result.fetchone()
                    if not new_clinic_staff_member:
                        return ClinicStaffDatabaseError(
                            "Unable to create clinic staff member"
                        )
                    return new_clinic_staff_member
        except psycopg.Error as e:
            raise ClinicStaffDatabaseError(
                f"Unable to create clinic staff member: {str(e)}"
            )
