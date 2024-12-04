steps = [
    [
        # Up
        """
            CREATE TYPE time_of_day AS ENUM ('AM', 'PM');

            CREATE TABLE
                IF NOT EXISTS appointments (
                    id SERIAL PRIMARY KEY NOT NULL,
                    first_name VARCHAR(100) NOT NULL,
                    last_name VARCHAR(100) NOT NULL,
                    phone VARCHAR(20) NOT NULL,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    pet_name VARCHAR(100) NOT NULL,
                    pet_type VARCHAR(100) NOT NULL,
                    reason TEXT NOT NULL,
                    preferred_date DATE NOT NULL,
                    preferred_time time_of_day NOT NULL,
                    new_client BOOLEAN NOT NULL,
                    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
        """,
        # Down
        """
            DROP TABLE IF EXISTS appointments;
            DROP TYPE IF EXISTS time_of_day;
        """,
    ]
]
