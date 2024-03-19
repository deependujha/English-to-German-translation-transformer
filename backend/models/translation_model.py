"""
Contains the TranslationModel class.
"""

from typing import Optional, Annotated
from pydantic import ConfigDict, BaseModel, Field
from pydantic.functional_validators import BeforeValidator

# Represents an ObjectId field in the database.
# It will be represented as a `str` on the model so that it can be serialized to JSON.
PyObjectId = Annotated[str, BeforeValidator(str)]


class TranslationModel(BaseModel):
    """
    Translation model that represents a translation from English to Hindi.
    """

    # The primary key for the StudentModel, stored as a `str` on the instance.
    # This will be aliased to `_id` when sent to MongoDB,
    # but provided as `id` in the API requests and responses.
    id: Optional[PyObjectId] = Field(alias="_id", default=None)
    english_sentence: str = Field(..., max_length=100)
    translated_hindi_sentence: str = Field(..., max_length=100)
    model_config = ConfigDict(
        populate_by_name=True,
        arbitrary_types_allowed=False,
        json_schema_extra={
            "example": {
                "english_sentence": "This is a test sentence.",
                "translated_hindi_sentence": "यह एक परीक्षण वाक्य है।",
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
