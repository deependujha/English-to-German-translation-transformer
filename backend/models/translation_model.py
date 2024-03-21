"""
Contains the TranslationModel class.
"""

from typing import Optional, Annotated
from datetime import datetime
from pydantic import ConfigDict, BaseModel, Field
from pydantic.functional_validators import BeforeValidator

# Represents an ObjectId field in the database.
# It will be represented as a `str` on the model so that it can be serialized to JSON.
PyObjectId = Annotated[str, BeforeValidator(str)]


class TranslationModel(BaseModel):
    """
    Translation model that represents a translation from English to German.
    """

    # The primary key for the StudentModel, stored as a `str` on the instance.
    # This will be aliased to `_id` when sent to MongoDB,
    # but provided as `id` in the API requests and responses.
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    english_sentence: str = Field(..., max_length=100)
    translated_german_sentence: str = Field(..., max_length=100)
    created_at: Optional[datetime] = Field(default=None)

    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=False,
        json_schema_extra={
            "example": {
                "english_sentence": "A group of people standing in front of an igloo ",
                "translated_german_sentence": "Ein Liveauftritt wird von einem Badmintonball .",
            }
        },
    )


class GetTranslateModel(BaseModel):
    """_summary_
    Get Translate Model
    """

    english_sentence: str = Field(..., max_length=100)
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=False,
        json_schema_extra={
            "example": {
                "english_sentence": "This is a test sentence.",
            }
        },
    )
