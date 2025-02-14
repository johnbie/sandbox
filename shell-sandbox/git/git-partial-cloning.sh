#/bin/sh
git clone --filter=blob:non # ignores most of the blobs
git clone --filter=tree:0 # ignore trees; rare to usee
