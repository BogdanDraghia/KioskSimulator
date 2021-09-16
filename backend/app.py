from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask import request
from devices.lector import client, sendData, lectorStart
from flask_cors import CORS, cross_origin
app = Flask(__name__)

api_v1_cors_config = {
  "origins": ["http://localhost:4000"]
}

cors = CORS(app, resources={r"/*": api_v1_cors_config})
app.config['CORS_HEADERS'] = 'Content-Type'

socketio = SocketIO(app,cors_allowed_origins="*",async_mode="threading")

clients = [0]

lectorData  = {
    "loading":0,
    "operational":0,
    "reading":0,
}

def changeData(changes):
    for key,value in changes.items():
        lectorData[key]=value

@app.route("/")
def hello_world():
    return "<p>Hello</p>"

@app.route("/lectorstart")
def hello_world2():
    lectorStart()

@app.route("/lectorsend")
@cross_origin()
def hello_world3():
    try:
        typeVal= request.args.get('typeVal')
        code= request.args.get('code')
        #usage ?typeVal=value&&code=value
        sendData(typeVal,code)
        print(typeVal + " " + code)
        return "ok", 200
    except:
        print("not working")
        return "not_ok", 555
@socketio.on('connect')
def test_disconnect2():
    print('Client connect')



#lector

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    app.run(port= 5000)
    socketio.run(app, port=5005)