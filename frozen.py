from flask_frozen import Freezer
from application import application

freezer = Freezer(application)

if __name__ == '__main__':
    freezer.freeze()