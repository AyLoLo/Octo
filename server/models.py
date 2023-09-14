from flask_sqlalchemy import SQLAlchemy;
from sqlalchemy import MetaData;
from sqlalchemy_serializer import SerializerMixin;
from sqlalchemy.orm import validates;


metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Traveler(db.Model, SerializerMixin):
    __tablename__ = "travelers"

    # Fields
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(25), unique=True, nullable=False)
    last_name = db.Column(db.String(25), nullable=True)
    sprite_image = db.Column(db.String, nullable=False)
    job = db.Column(db.String, nullable=False)
    game_origin = db.Column(db.String, nullable=False)
    quote = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)

    # Validations
    @validates("first_name")
    def validate_first_name(self, key, value):
        if not (value[0].isupper()):
            raise ValueError("First name must begin with a capital letter")
        return value
    
    @validates("last_name")
    def validate_last_name(self, key, value):
        if not (value[0].isupper):
            raise ValueError("Last name must begin with a capital letter")
        return value

    @validates("job")
    def validate_job(self, key, value):
        jobs =  ["Cleric", "Scholar", "Merchant", "Warrior", "Dancer", "Apothecary", "Thief", "Hunter"]
        if not value in jobs:
            raise ValueError(f"{value} must be one of the main 8 jobs.")
        return value

    @validates("game_origin")
    def validate_game_origin(self, key, value):
        game_origins = ["Octopath Traveler", "Octopath Traveler II", "Champions Of The Continent"]
        if not value in game_origins:
            raise ValueError(f"{value} must be existing game origin.")
        return value
