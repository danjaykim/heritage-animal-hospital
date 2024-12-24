steps = [
    [
        # Up
        """--sql
            ALTER TABLE appointments
            DROP CONSTRAINT IF EXISTS appointments_email_key;
        """,
        # Down
        """--sql
        """,
    ]
]
