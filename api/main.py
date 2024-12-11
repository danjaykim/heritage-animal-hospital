import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import appointment_router, clinic_staff_router, auth_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:5173")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router.router)
app.include_router(appointment_router.router)
app.include_router(clinic_staff_router.router)
