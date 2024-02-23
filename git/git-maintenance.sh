#!/bin/sh
git maintenance # improves performance in the background

# What it does:
# disable garbage collector (gc)
# set commit-graph to hourly
# set prefetch to hourly
# set loose-objects to daily
# set incremental-repack to daily
# set pack-refs to none
