#!/usr/bin/env bash
val="a"
echo $(("$val" == "a")) # [[ "$val" == "a" ]]
echo $(("$val" != "a")) # [[ "$val" != "a" ]]

num=1
[[ "$num" -eq 1 ]] # equals
[[ "$num" -ne 1 ]] # not equal
[[ "$num" -lt 1 ]] # less than
[[ "$num" -le 1 ]] # less than or equal to
[[ "$num" -gt 1 ]] # greater than
[[ "$num" -ge 1 ]] # greater than or equal to
