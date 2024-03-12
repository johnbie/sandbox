#!/usr/bin/env bash

# array
arr=(1 2 3 4 5)
for item in ${arr[@]}; do
	echo "$item"
done

# c-style
for ((i = 0; i < 10; i++)); do
	echo "$i"
done

# range
for i in {1..10}; do
	echo "$i"
done

# pattern matching
for item in ~/dotfiles/**/*.sh; do
	echo "$item"
done

# command result
for item in $(ls); do
	echo "$item"
done
