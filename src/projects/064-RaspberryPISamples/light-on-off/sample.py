#! /usr/bin/python

""" 
	Simple Pyhton program that light on/off
"""

import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BOARD)
GPIO.setup(7, GPIO.OUT)
GPIO.setup(11, GPIO.OUT)
GPIO.setup(13, GPIO.OUT)

for i in range(0, 10):
	GPIO.output(7, True)
	time.sleep(1)
	GPIO.output(11, True)
	time.sleep(1)
	GPIO.output(13, True)
	time.sleep(1)
	GPIO.output(7, False)
	time.sleep(1)
	GPIO.output(11, False)
	time.sleep(1)
	GPIO.output(13, False)
	time.sleep(1)
GPIO.cleanup()




