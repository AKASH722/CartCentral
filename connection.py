from flask import Flask
from flask_sqlalchemy import SQLAlchemy

CC = Flask("Cart Central")
CC.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:root@localhost:5433/CC_Final'
db = SQLAlchemy(CC)
