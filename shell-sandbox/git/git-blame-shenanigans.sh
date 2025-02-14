#/bin/sh
git blame - 15,26 filename.txt # blames a portion of the file
git blame -L name filename.txt # blames a function
git blame -w # ignore whitespace
git blame -w -C # .also detect lines moved or copied in same commit
git blame -w -C -C # ..,or commits that created the file
git blame -w -C -C # ..or any commits at all
