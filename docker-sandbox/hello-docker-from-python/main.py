# project based on YouTube tutorial: https://www.youtube.com/watch?v=0TFWtfFY87U
import time
import socket
from sklearn.datasets import load_iris

# server setup
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(("0.0.0.0", 9999)) # Docker-safe
server.listen()

# load data
data = load_iris()

while True:
    client, addr = server.accept()
    print("Connection from", addr)
    client.send("You are connected!\n".encode())
    client.send(f"{data['data'][:, 0]}\n".encode())
    time.sleep(2)
    client.send("You are being disconnected!\n".encode())
    client.close()

# To run the project via Docker (assuming it's already installed and running), type `docker build -t [IMAGE_NAME] .`
# Then, run `docker run -p 9999:9999 [IMAGE_NAME]`
# To see the results, run `telnet 127.0.0.1 9999` on terminal or WSL (if on windows)