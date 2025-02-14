#!/bin/sh
echo "this is a line of text" | tr -cd 'aeiou\n'
