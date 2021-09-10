from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask import request
from devices.lector import sendData, lectorStart
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app,cors_allowed_origins="*")

lectorData  = {
    "loading":0,
    "operational":0,
    "reading":0,
    "data":{
        "DefaultCode":"undefined",
        "TriggerOn":"undefined",
        "TriggerOff":"undefined",
        "TriggerMessageOn":"undefined",
        "TriggerMessageOff":"undefined"
    },
}

@app.route("/")
def hello_world():
    return "<p>Hello</p>"

@app.route("/test")
def hello_world2():
    lectorStart()
    return "<p>Hello, World!</p>"

@app.route("/lectorsend")
@cross_origin()
def hello_world3():
    typeVal= request.args.get('typeVal')
    code= request.args.get('code')
    #usage ?typeVal=value&&code=value
    #sendData(typeVal,code)
    print(typeVal + " " + code)
    return "ok"

@socketio.on('connect')
def test_disconnect():
    print('Client connect')



#lector

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app)