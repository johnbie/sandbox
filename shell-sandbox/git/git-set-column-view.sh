#!/bin/sh
git branch --column # column view
git config --global column.ui auto
git column # puts _anything_ in columns
