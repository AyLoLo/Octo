from flask import Flask, make_response, jsonify, request, session;
from flask_sqlalchemy import SQLAlchemy;
from flask_migrate import Migrate;
from flask_restful import Api, Resource;
from flask_cors import CORS;


from models import db, Traveler

app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travelers.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)

db.init_app(app)

CORS(app)

api = Api(app)

class Travelers(Resource):

    def get(self):
        travelers = Traveler.query.all()
        response_body = []
        for traveler in travelers :
            response_body.append(traveler.to_dict())
        return make_response(jsonify(response_body), 200)