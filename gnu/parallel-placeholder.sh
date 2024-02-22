#!/bin/sh
parallel echo "number" {} ::: 1 2 3
