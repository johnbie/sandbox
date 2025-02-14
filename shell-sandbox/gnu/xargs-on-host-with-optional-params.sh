#!/bin/sh
cat ../datasets/hostnames | xargs -I{} -P4 host -t A {} 8.8.8.8
