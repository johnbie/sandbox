#!/usr/bin/env bash
set -e # exit on error (basically `cmd1 || exit 1`)
set -u # exit on unset variable (i.e. `name` does not exist)
set -o pipefail # exit on pipe fail

set -euo pipefail # all
