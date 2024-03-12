#!/usr/bin/env bash

tempdir=$(mktemp -d)

trap "rm -rf $tempdir" EXIT

echo $tempdir
