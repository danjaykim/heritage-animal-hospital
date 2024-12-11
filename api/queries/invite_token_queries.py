import os
import psycopg
from typing import Optional
from pydantic import EmailStr
from datetime import datetime, timedelta
from psycopg.rows import class_row
from psycopg_pool import ConnectionPool
from models.invite_tokens import InviteTokenRequest, InviteTokenResponse
from utils.exceptions import DatabaseURLException, InviteTokenDatabaseError


DATABASE_URL = os.environ.get("DATABASE_URL")
if DATABASE_URL is None:
    raise DatabaseURLException(
        "You forgot to define DATABASE_URL in your environment"
    )


pool = ConnectionPool(DATABASE_URL)


class InviteTokenQueries:
    def create_invite_token(
        self, email: EmailStr, token: str, exp_days: int = 7
    ) -> Optional[InviteTokenResponse]:
        expiration_date = datetime.now() + timedelta(days=exp_days)

        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(InviteTokenResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            INSERT INTO invite_tokens
                            VALUES (%s, %s, %s, %s)
                            RETURNING email, token, expiration, used;
                        """,
                        [email, token, expiration_date, False],
                    )
                    token = result.fetchone()
                    if not token:
                        raise InviteTokenDatabaseError(
                            "Unable to create token"
                        )
                    return token
        except psycopg.Error as e:
            raise InviteTokenDatabaseError(
                f"Error retrieving invite token: {str(e)}"
            )

    def get_invite_token(self, token: str) -> Optional[InviteTokenResponse]:
        try:
            with pool.connection() as conn:
                with conn.cursor(
                    row_factory=class_row(InviteTokenResponse)
                ) as cur:
                    result = cur.execute(
                        """--sql
                            SELECT email, token, expiration, used
                            FROM invite_tokens
                            WHERE token = %s;
                        """,
                        [token],
                    )
                    token = result.fetchone()
                    if not token:
                        raise InviteTokenDatabaseError(
                            "Unable to retrieve token"
                        )
                    return token
        except psycopg.Error as e:
            raise InviteTokenDatabaseError(
                f"Error retrieving invite token: {str(e)}"
            )

    def mark_token_used(self, token: str) -> None:
        try:
            with pool.connection() as conn:
                with conn.cursor() as cur:
                    cur.execute(
                        """--sql
                            UPDATE invite_tokens
                            SET used = %s
                            WHERE token = %s;
                        """,
                        [True, token],
                    )
        except psycopg.Error as e:
            raise InviteTokenDatabaseError(
                f"Error marking token used: {str(e)}"
            )
