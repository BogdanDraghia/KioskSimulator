from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from devices.lector import lectorStart
app = Flask(__name__)
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

@socketio.on('connect')
def test_disconnect():
    print('Client connect')



#lector

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    socketio.run(app)