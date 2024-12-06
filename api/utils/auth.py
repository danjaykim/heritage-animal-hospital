"""
Helper functions for implementing authentication
"""

import bcrypt


def hash_password(plain_password: str, salt_rounds: int = 12) -> str:
    """
    Hashes the input password
    Default bcrypt salt rounds set at 12
    """
    salt = bcrypt.gensalt(rounds=salt_rounds)
    return bcrypt.hashpw(plain_password, salt).decode()


def verify_password(plain_password: str, hashed_password: bytes) -> bool:
    """
    This verifies the user's password by hashing the plain password
    and then compares it to the hashed password from the db
    Added try, except block to ensure False if hashed_password isn't a valid hash
    """
    try:
        bcrypt.checkpw(plain_password.encode(), hashed_password.encode())
    except ValueError:
        return False
