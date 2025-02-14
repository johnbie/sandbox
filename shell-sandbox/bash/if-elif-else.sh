#!/usr/bin/env bash

# does the logs file have lines with "ERROR" in it?
if grep -q "ERROR" "logs.txt"; then
	echo "error found"
elif grep -q "WARNING" "logs.txt"; then
	echo "warning found"
else
	echo "nothing found"
fi
