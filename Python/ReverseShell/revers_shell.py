import socket
import sys

def create_socket():
    global host
    global port
    global sckt
    host = '192.168.1.6'
    port = '9999'
    sckt = socket.socket(socket.AF_INET,socket.SOCK_STREAM)

def bind_socket():
    global host
    global port
    global sckt
    try:
        sckt = sckt.bind((host, port))
        sckt.listen(5) # 5 mili seconds
    except socket.error as err:
        print('ERROR!\n    ' + str(socket.error))

def accept_socket():
    conn, (ip, port) = sckt.accept
    send_command(conn)
    conn.close

def send_command():
    while True:
        cmd = input('enter your command:  ')
        if cmd == 'exit':
            conn.close()
            sckt.close()
            sys.exit()
        else:
            conn.send(str.encode(cmd))
            client_response = str(conn.recv(1024), 'utf-8')
            print(client_response, end='')

def main():
    create_socket()
    bind_socket()
    accept_socket()
main()


