"""
Code to connect with MongoDB
"""

import motor.motor_asyncio


def get_collection_client(
    mongo_url: str = "mongodb://localhost:27017",
    db_name: str = "college",
    collection_name: str = "students",
):
    """_summary_
    Params:
        mongo_url (str, optional): [description]. Defaults to "mongodb://localhost:27017".
        db_name (str, optional): [description]. Defaults to "college".
        collection_name (str, optional): [description]. Defaults to "students".

    Returns:
        motor.motor_asyncio.AsyncIOMotorCollection: [description]
    """
    client = motor.motor_asyncio.AsyncIOMotorClient(mongo_url)
    my_db = client[db_name]
    my_collection_client = my_db.get_collection(collection_name)

    return my_collection_client
