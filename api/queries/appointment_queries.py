import os
import psycopg
from typing import Optional
from psycopg.rows import class_row
from psycopg_pool import ConnectionPool
from models.appointments import AppointmentRequest, AppointmentResponse
from utils.exceptions import DatabaseURLException, AppointmentDatabaseError


DATABASE_URL = os.environ.get("DATABASE_URL")
if DATABASE_URL is None:
    raise DatabaseURLException(
        "You forgot to define DATABASE_URL in your environment"
    )

pool = ConnectionPool(DATABASE_URL)


class AppointmentQueries:
    def get_all_appointments(self) -> list[AppointmentResponse]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(AppointmentResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT * FROM appointments
                            ORDER BY created_on DESC;
                        """
                    )
                    appointments = result.fetchall()
                    return appointments
        except psycopg.Error as e:
            raise AppointmentDatabaseError(
                f"Error retrieving all appointments: {str(e)}"
            )

    def get_appointment(self, id: int) -> Optional[AppointmentResponse]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(AppointmentResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT * FROM appointments
                            WHERE id = %s;
                        """,
                        [id],
                    )
                    appointment = result.fetchone()
                    if not appointment:
                        return None
                    return appointment
        except psycopg.Error as e:
            raise AppointmentDatabaseError(
                f"Error retrieving Appointment ID {id}: {str(e)}"
            )
