#!/bin/sh
parallel --keep-order sleep {} ';' echo {} ::: 3 2 1
