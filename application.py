from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
application = Flask(__name__)

# ROUTES

@application.route('/')
def welcome():
   return render_template('index.html')   

@application.route('/registration')
def registration():
    return render_template('registration.html')

@application.route('/login')
def login():
    return render_template('login.html')

@application.route('/profile')
def profile():
    return render_template('profile.html')

@application.route('/upload')
def upload():
    return render_template('upload.html')

@application.route('/recommendations')
def recommendations():
    return render_template('recommendations.html')

if __name__ == '__main__':
   application.run(debug = True)

