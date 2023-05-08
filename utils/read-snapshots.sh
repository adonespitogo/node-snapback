#!/bin/env sh

DIR="$SNAPSHOTS_DIR"
DELIM="$SNAPSHOTS_DELIM"

for file in $DIR; do
    echo "${DELIM}"
    cat "$file/info.xml"
done
