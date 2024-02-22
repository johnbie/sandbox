#!/bin/sh
cat ../datasets/hostnames | xargs -I{} -P4 sh -c "host -t A {} 8.8.8.8 | tail -n1"
