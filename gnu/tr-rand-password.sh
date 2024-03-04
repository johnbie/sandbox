#!/bin/sh
head /dev/urandom | tr -cd '[:print:]'
