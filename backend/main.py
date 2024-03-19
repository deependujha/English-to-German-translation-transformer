import os
from dotenv import load_dotenv
from datetime import datetime
from zoneinfo import ZoneInfo
from fastapi import FastAPI, HTTPException

# =======================
from database_connection.conn import get_collection_client
from models.translation_model import TranslationModel, GetTranslateModel

load_dotenv()
MONGODB_URL = os.getenv("MONGODB_URL")
DB_NAME = os.getenv("DB_NAME")
COLLECTION_NAME = os.getenv("COLLECTION_NAME")

# get the collection client
my_collection_client = get_collection_client(
    mongo_url=MONGODB_URL,
    db_name=DB_NAME,
    collection_name=COLLECTION_NAME,
)


app = FastAPI()


@app.get("/")
def read_root():
    """_summary_"""
    return {"Hello": "World"}


@app.post("/translate/", response_model=TranslationModel)
async def create_item(english_text: GetTranslateModel):
    """_summary_"""
    eng_txt = english_text.english_sentence

    temp_hin_txt = eng_txt + "-- in hindi"

    dtobj = datetime.now(tz=ZoneInfo("Asia/Kolkata"))

    new_translation = await my_collection_client.insert_one(
        {
            "english_sentence": eng_txt,
            "translated_hindi_sentence": temp_hin_txt,
            "created_at": dtobj,
        }
    )

    new_created_translation = await my_collection_client.find_one(
        {"_id": new_translation.inserted_id}, {"_id": False}
    )

    if new_created_translation:
        return new_created_translation
    else:
        raise HTTPException(status_code=404, detail="Translation not found")
