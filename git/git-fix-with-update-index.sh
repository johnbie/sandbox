#!/bin/sh
rm -f .git/index  
git reset  
git update-index --refresh
# for error message 'failed to read delta-pack'
