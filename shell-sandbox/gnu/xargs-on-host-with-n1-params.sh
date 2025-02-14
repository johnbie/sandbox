#!/bin/sh
cat ../datasets/hostnames | xargs -n1 host -t A
