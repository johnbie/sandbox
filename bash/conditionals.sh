#!/usr/bin/env bash

# string conditions
val="a"
echo $(("$val" == "a")) # [[ "$val" == "a" ]]
echo $(("$val" != "a")) # [[ "$val" != "a" ]]

# numeric conditions
num=1
[[ "$num" -eq 1 ]] # equals
[[ "$num" -ne 1 ]] # not equal
[[ "$num" -lt 1 ]] # less than
[[ "$num" -le 1 ]] # less than or equal to
[[ "$num" -gt 1 ]] # greater than
[[ "$num" -ge 1 ]] # greater than or equal to

# file permissions
file = "./hello"
[[ -r $file ]]
[[ -w $file ]]
[[ -x $file ]]

# combined
[[ $num -ne 1 -a $num -ne 2 ]] # internal AND
[[ $num -ne 1 -o $num -ne 2 ]] # internal OR
[[ $num -ne 1 ]] && [[ $num -ne 2 ]] # external AND
[[ $num -ne 1 ]] || [[ $num -ne 2 ]] # external OR
