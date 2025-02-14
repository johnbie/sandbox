#!/bin
find /path/to/your/root/directory -maxdepth 1 -mindepth 1 -type d -exec sh -c '[ $(find "{}" -maxdepth 1 -type f -empty | wc -l) -eq 1 ]' \; -print
