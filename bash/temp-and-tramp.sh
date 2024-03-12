#!/usr/bin/env bash
tempfile=$(mktemp)

trap "rm -f $tempfile" EXIT # call on exit

echo $tempfile
