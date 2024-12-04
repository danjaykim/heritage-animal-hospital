steps = [
    [
        # Up: Add id column to clinic staff table
        """--sql
            ALTER TABLE clinic_staff
            ADD COLUMN id SERIAL PRIMARY KEY;
        """,
        # Down
        """
        """,
    ]
]
