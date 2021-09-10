
import json

import socket
import socketserver
import sys
from threading import Thread
# Create a TCP/IP socket
CLIENTS = {}

# Bind the socket to the port
server_address = ('0.0.0.0', 4111)
lectorReading = False
connt ="nope"
my_clients = [] 
def sendallclients(message): 
    for client in my_clients : 
        client.send(message)

def client(conn):
    global lectorReading
    while True:
        data = conn.recv(1024)
        data = str(data.decode("ASCII")).strip('\x02\x03')
        if(data == "t"):
            lectorReading = True
        print(data)
        if not data:
            break


def lectorStart():
    global connt
    global lectorReading
    print('starting up on {} port {}'.format(*server_address))
    s =socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

            # the value tha tis passed to bind() depends on the address family of the socket
            # for AF_INET(IPv4), bind() expects a tuple (host, port)
    s.bind(server_address)
    s.listen()
    while True:
        conn, addr = s.accept()
        CLIENTS[conn.fileno()] = conn
        Thread(target=client, args=(conn,)).start()


def sendData(type,code):
    global lectorReading
    data ={"message":str(type),"code":str(code)}
    if(lectorReading):
        data = str(data).replace("'", '"')
        for client in CLIENTS.values():
            client.send(bytes(data, encoding="ascii"))
        lectorReading= False
    else:
        return "LectorNotStarted"






