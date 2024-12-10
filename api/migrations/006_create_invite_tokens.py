steps = [
    [
        # Up
        """--sql
            CREATE TABLE
                IF NOT EXISTS invite_tokens (
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    token VARCHAR(100) UNIQUE NOT NULL,
                    expiration TIMESTAMP NOT NULL,
                    used BOOLEAN DEFAULT FALSE
                );
        """,
        # Down
        """--sql
            DROP TABLE IF EXISTS invite_tokens;
        """,
    ]
]
