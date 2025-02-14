#!/bin/sh
git update-index --assume-unchanged assumeunchanged.txt
git update-index --no-assume-unchanged assumeunchanged.txt
