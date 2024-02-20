#!/bin/sh
awk '($0 ~ /e$/){print $0;}' test.csv # longer
awk '/e$/{print $0;}' test.csv # shorter; skip parentheses and the all-line indicator
awk '/e$/' test.csv # even shorter
# command from https://blog.robertelder.org/intro-to-awk-command/?utm_source=yt&utm_medium=desc&utm_campaign=ytchannel&utm_content=FbSpuZVb164
