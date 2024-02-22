#!/bin/sh
parallel echo "numbers" {1} "and" {2} ::: 1 2 3 ::: 3 4 5
