#!/bin/sh
awk '(length($1) > 5){print $0;}' test.csv
awk 'length($1) > 5' test.csv # shorter
# command from https://blog.robertelder.org/intro-to-awk-command/?utm_source=yt&utm_medium=desc&utm_campaign=ytchannel&utm_content=FbSpuZVb164
