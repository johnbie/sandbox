#!/bin/sh
seq 3 | parallel --jobs 4 --delay 2 --timeout 3600 --shuf --results ~/out.csv --progress
# 5 jobs, one a second, shuffled, with 1 hour timeout. Return as csv and show live progress
