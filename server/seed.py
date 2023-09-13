from app import app;
from models import db, Traveler;

with app.app_context():

    Traveler.query.delete()

    travelers = []
    travelers.append(Traveler(name="Ophillia Clement"))
    travelers.append(Traveler(name="Cyrus Albright"))
    travelers.append(Traveler(name="Tressa Colzione"))
    travelers.append(Traveler(name="Olberic Eisenberg"))
    travelers.append(Traveler(name="Primrose Azelhart"))
    travelers.append(Traveler(name="Alfyn Greengrass"))
    travelers.append(Traveler(name="Therion"))
    travelers.append(Traveler(name="H'aanit"))

    db.session.add_all(travelers)
    db.session.commit()

    print("⚔️Successfully Seeded⚔️")