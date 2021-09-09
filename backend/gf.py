import socket
import sys

# Create a TCP/IP socket


# Bind the socket to the port
server_address = ('0.0.0.0', 5343)
print('starting up on {} port {}'.format(*server_address))

def lectorStart():
    
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
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
            print("Connected by", addr)

            # an infinite while loop is used to loop over blocking calls to conn.recv().
            # here it will read whatever data the client send and echoes it back using conn.sendall()
            while True:
                data = conn.recv(1024)
                print(data)
                # if conn.recv() returns an empty bytes object, b'', then the loop is terminated
                if not data:
                    break
                conn.sendall(data)
    print("client disconected,the socket will restart")
lectorStart()



