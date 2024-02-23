#!/bin/sh
rename  's/.*/lc($&)/e; s/(^| )./uc($&)/ge' *
