# Note: This migration inserts sample, fake data for dev purposes only
# Passwords are intentionally plain text for this specific development seed

steps = [
    [
        # Seed clinic staff data
        """--sql
            INSERT INTO clinic_staff (
                        email,
                        hashed_password,
                        first_name,
                        last_name,
                        phone,
                        role
            )
            VALUES
                (
                    'dank456@gmail.com',
                    'examplepassword',
                    'Dan',
                    'Grape',
                    '562-852-7412',
                    'admin'
                ),
                (
                    'heidik123@gmail.com',
                    'fakepassword123',
                    'Heidi',
                    'Plum',
                    '714-123-6321',
                    'vet'
                );
        """,
        # Removing sample data
        """--sql
            DELETE FROM clinic_staff
            WHERE email IN ('dank456@gmail.com', 'heidik123@gmail.com');
        """,
    ]
]
