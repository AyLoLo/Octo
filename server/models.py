from flask_sqlalchemy import SQLAlchemy;
from sqlalchemy import MetaData;
from sqlalchemy_serializer import SerializerMixin;

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class Travler(db.Model, SerializerMixin):
    __tablename__ = "travelers"

# Fields 

id = db.column(db.Integer, primary_key=True)
name = db.column(db.String(25), nullable=False, unique=True)