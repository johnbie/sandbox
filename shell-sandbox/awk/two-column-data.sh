#!/bin/sh
awk 'NR>1{print "First column item: " $1 " Second column item: " $2 }' ../datasets/temperatures.csv
# command from https://blog.robertelder.org/intro-to-awk-command/?utm_source=yt&utm_medium=desc&utm_campaign=ytchannel&utm_content=FbSpuZVb164
