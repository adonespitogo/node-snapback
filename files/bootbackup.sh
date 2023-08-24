#!/bin/sh

# Put it in /usr/local/bin/bootbackup.sh and make it executable.

BKNAME="$(uname -r)-$(date +%Y%m%d%H%M%S)"
BKDIR="/.bootbackup/$BKNAME"

if [[ -d $BKDIR ]]; then
	echo "Clean up $BKDIR..."
	rm -rf $BKDIR
fi

echo "Copying /boot to $BKDIR..."
mkdir -p $BKDIR
cp -r /boot/* $BKDIR

echo "Creating a snapper backup for linux $(uname -r)..."
snapper -c root create -d "Linux backup for $(uname -r) => $BKDIR"
