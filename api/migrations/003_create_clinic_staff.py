steps = [
    [
        # Up: Clinic Staff Table
        """
            CREATE TYPE role_type AS ENUM ('admin', 'vet', 'tech', 'assistant', 'receptionist');
            CREATE TABLE
                IF NOT EXISTS clinic_staff (
                    email VARCHAR(100) UNIQUE NOT NULL,
                    hashed_password TEXT NOT NULL,
                    first_name VARCHAR(100) NOT NULL,
                    last_name VARCHAR(100) NOT NULL,
                    phone VARCHAR(20) NOT NULL,
                    role role_type NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );
        """,
        # Down: Remove Clinic Staff Table
        """
            DROP TABLE IF EXISTS clinic_staff;
            DROP TYPE IF EXISTS role_type;
        """,
    ]
]
