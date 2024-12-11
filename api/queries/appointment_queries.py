import os
import psycopg
from typing import Optional
from psycopg.rows import class_row
from psycopg_pool import ConnectionPool
from models.appointments import (
    AppointmentRequest,
    AppointmentResponse,
    AppointmentUpdateRequest,
)
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

    def create_appointment(
        self, appt: AppointmentRequest
    ) -> AppointmentResponse:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(AppointmentResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            INSERT INTO appointments (
                                first_name,
                                last_name,
                                phone,
                                email,
                                pet_name,
                                pet_type,
                                reason,
                                preferred_date,
                                preferred_time,
                                new_client
                            )
                            VALUES (
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s,
                                %s
                            )
                            RETURNING *;
                        """,
                        [
                            appt.first_name,
                            appt.last_name,
                            appt.phone,
                            appt.email,
                            appt.pet_name,
                            appt.pet_type,
                            appt.reason,
                            appt.preferred_date,
                            appt.preferred_time,
                            appt.new_client,
                        ],
                    )
                    new_appointment = result.fetchone()
                    if not new_appointment:
                        raise AppointmentDatabaseError(
                            "Unable to create appointment"
                        )
                    return new_appointment
        except psycopg.Error as e:
            print(e)
            raise AppointmentDatabaseError(
                f"Unable to create appointment: {str(e)}"
            )

    def update_appointment(
        self, id: int, appt: AppointmentUpdateRequest
    ) -> AppointmentResponse:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(AppointmentResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            UPDATE appointments
                            SET
                                first_name = COALESCE(%s, first_name),
                                last_name = COALESCE(%s, last_name),
                                phone = COALESCE(%s, phone),
                                email = COALESCE(%s, email),
                                pet_name = COALESCE(%s, pet_name),
                                pet_type = COALESCE(%s, pet_type),
                                reason = COALESCE(%s, reason),
                                preferred_date = COALESCE(%s, preferred_date),
                                preferred_time = COALESCE(%s, preferred_time),
                                new_client = COALESCE(%s, new_client)
                            WHERE id = %s
                            RETURNING *;
                        """,
                        [
                            appt.first_name,
                            appt.last_name,
                            appt.phone,
                            appt.email,
                            appt.pet_name,
                            appt.pet_type,
                            appt.reason,
                            appt.preferred_date,
                            appt.preferred_time,
                            appt.new_client,
                            id,
                        ],
                    )
                    updated_appointment = result.fetchone()
                    if not updated_appointment:
                        raise AppointmentDatabaseError(
                            "Unable to update appointment"
                        )
                    return updated_appointment
        except psycopg.Error as e:
            raise AppointmentDatabaseError(
                f"Unable to update appointment: {str(e)}"
            )

    def delete_appointment(self, id: int) -> str:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """--sql
                            DELETE FROM appointments
                            WHERE id = %s;
                        """,
                        [id],
                    )
                    if cur.rowcount == 0:
                        raise AppointmentDatabaseError(
                            f"Appointment id {id} not found in the database"
                        )
                    return (
                        f"Appointment id: {id} has been successfully deleted"
                    )
        except psycopg.Error as e:
            raise AppointmentDatabaseError(
                f"Invalid appointment id {id}: {str(e)}"
            )
