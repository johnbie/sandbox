#!/usr/bin/env bash

# by variable checking
counter=0
while [[ $counter -lt 5 ]]; do
	echo $counter
	((counter++))
done

# while-true and break
while true; do
	if [[ false ]]; then
		break
	fi
done
