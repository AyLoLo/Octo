from app import app;
from models import db, Traveler;

with app.app_context():

    Traveler.query.delete()

    travelers = []

    travelers.append(Traveler(name="Ophilia Clement"))

    db.session.add_all(travelers)
    db.session.commit()

    print("⚔️Successfully Seeded⚔️")