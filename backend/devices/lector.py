import socket
import sys

# Create a TCP/IP socket


# Bind the socket to the port
server_address = ('0.0.0.0', 4111)
lectorReading = False
connt ="nope"
def goodRead():
        connt.sendall(b'{"message":"GoodRead","code":"*12312*"}')
def lectorStart():
    global connt
    global lectorReading
    print('starting up on {} port {}'.format(*server_address))
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)

        # the value tha tis passed to bind() depends on the address family of the socket
        # for AF_INET(IPv4), bind() expects a tuple (host, port)
        s.bind(server_address)
        s.listen()

        # When a client connects, it returns
        # conn - a new socket object representing the connection
        # addr - a tuple holding the address of the client (host, port) for IPv4 or (host, port, flowinfo, scopeid) for IPv6
        conn, addr = s.accept()
        
        # conn is a different socket from 's' which was the original socket used to listen to and accept new connections
        with conn:
            connt = conn
            # an infinite while loop is used to loop over blocking calls to conn.recv().
            # here it will read whatever data the client send and echoes it back using conn.sendall()
            while True:
                data = conn.recv(1024)
                data = str(data.decode("ASCII")).strip('\x02\x03')
                if(data == "t"):
                    print("START READING LECTOR")
                    lectorReading = True
                    goodRead()
                    #start lector 
                elif(data == "y"):
                    print("STOP LECTOR")
                    lectorReading = False
                    #send triggerOFF
                # if conn.recv() returns an empty bytes object, b'', then the loop is terminated
                if not data:
                    break
    lectorStart()
    print("client disconected,the socket will restart")





