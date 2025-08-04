from fastapi import FastAPI
from db import Base, engine
from routes.mall import router as mall_router
from routes.store import router as store_router
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="RoamWise Backend",
    description="API for RoamWise app",
    version="1.0.0",
    docs_url="/docs",            # <-- This must be set
    redoc_url="/redoc",          # Optional
    openapi_url="/openapi.json"  # This must be set if you want docs to work
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For dev only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(mall_router, prefix="/api/malls", tags=["Malls"])
app.include_router(store_router, prefix="/api/stores", tags=["Stores"])
