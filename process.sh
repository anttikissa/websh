#!/bin/sh

trap "echo Terminated; exit" SIGINT SIGTERM

while true
do
	echo 'Hi there!'
	echo 'This is an error!' >&2
	sleep 1
done


