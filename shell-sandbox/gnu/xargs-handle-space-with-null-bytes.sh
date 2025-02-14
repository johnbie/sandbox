#!/bin/sh
find ../datasets -type f -print0 | xargs -0 sha1sum
