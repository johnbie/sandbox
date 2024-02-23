#!/bin/sh
printf 'http://gerganov.com/script?arg1=value1&arg2=value2' | jq --slurp --raw-input --raw-output @uri
# returns http%3A%2F%2Fgerganov.com%2Fscript%3Farg1%3Dvalue1%26arg2%3Dvalue2
