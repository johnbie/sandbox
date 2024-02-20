#!/bin/sh
awk 'NR==1; NR>1{print ($2=="F" ? ($1-32) / 1.8 : $1)"\tC"}' ../datasets/temperatures.csv
# command from https://blog.robertelder.org/intro-to-awk-command/?utm_source=yt&utm_medium=desc&utm_campaign=ytchannel&utm_content=FbSpuZVb164
