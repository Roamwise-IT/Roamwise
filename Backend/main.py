from fastapi import FastAPI, Depends, Query
from sqlalchemy.orm import Session
from datetime import datetime
from typing import Optional

from db import get_db
from model import MallStore
from schemas import StoreResponse, StoreCard

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

@app.get("/")
def read_root():
    return {"message" : "http://127.0.0.1:8000/docs  --- test endpoints"}

# CORS for React Native
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stores", response_model=StoreResponse)
def get_stores(
    search: Optional[str] = Query(None),
    floor_level: Optional[int] = Query(None),
    category: Optional[str] = Query(None),
    only_open: Optional[bool] = Query(False),
    passed_landmark: Optional[str] = Query(None),
    db: Session = Depends(get_db)
):
    query = db.query(MallStore)

    if search:
        query = query.filter(MallStore.Store_Name.ilike(f"%{search}%"))
    if floor_level is not None:
        query = query.filter(MallStore.Floor_Level == floor_level)
    if category:
        query = query.filter(MallStore.Category == category)
    if only_open:
        now = datetime.now().strftime("%I:%M %p")
        # Using string comparison fallback for now
        query = query.filter(MallStore.Opening_Hours <= now,
                             MallStore.Closing_Hours >= now)
    if passed_landmark:
        query = query.filter(MallStore.Store_Name > passed_landmark)

    stores = query.all()

    store_cards = []
    for s in stores:
        store_cards.append(StoreCard(
            name=s.Store_Name,
            category=s.Category,
            floor_level=s.Floor_Level,
            open_time=s.Opening_Hours,
            close_time=s.Closing_Hours,
            contact_info=s.Contact_Number,
            recommendations="PLACEHOLDER: RECOMMENDATIONS/ PROMOS/ DISCOUNTS"
        ))

    question_text = f"Have you passed {passed_landmark}?" if passed_landmark else "Which stores are you looking for?"

    return StoreResponse(
        question=question_text,
        stores=store_cards
    )
