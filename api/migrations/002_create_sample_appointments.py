steps = [
    [
        # Up: Adding Sample Data
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
            VALUES
                (
                    'John',
                    'Doe',
                    '123-456-7890',
                    'jdoe@gmail.com',
                    'Scruffy',
                    'Dog',
                    'Annual Check-up',
                    '2024-12-10',
                    'AM',
                    FALSE
                ),
                (
                    'Jane',
                    'Clark',
                    '714-825-9365',
                    'jclark@gmail.com',
                    'Bubbs',
                    'Cat',
                    'Vaccinations',
                    '2024-12-20',
                    'PM',
                    TRUE
                );

        """,
        # Down: Removing Sample Data
        """--sql
            DELETE FROM appointments
            WHERE email IN ('jdoe@gmail.com', 'jclark@gmail.com');
        """,
    ]
]
