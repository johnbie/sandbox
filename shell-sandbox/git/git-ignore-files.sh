#!/bin/sh
git update-index --skip-worktree skipworktree.txt
git update-index --no-skip-worktree skipworktree.txt
