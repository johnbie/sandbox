#!/usr/bin/env bash
name="World" # no space allowed around the equal sign because bash treats "name" like a command then
echo "Hello $name"
echo "Hello ${name} in curly braces!"
echo "name length: ${#name}"
