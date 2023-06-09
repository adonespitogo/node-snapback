# node-snapback
A tool for listing and rolling back snapper btrfs snapshots.

## System Requirements:

- [snapper](https://wiki.archlinux.org/title/snapper)
- [snapper-rollback](https://aur.archlinux.org/packages/snapper-rollback)
- a user with `sudo` access

## Install

`npm i -g @adonesp/snapbackjs`

## Usage

List snapshots in `/.snapshots`:

```
sudo snapback ls
```

Rollback to snapshot:

```
sudo snapback num 123
```

Where `123` is the number of brtfs snapshot.

## Commands

- `ls`                      - to list available snapshots in '/.snapshots' directory.
- `num [snapshot number]`   - specify a snapshot number to rollback. For example: `snapback num 123`
- `v, -v, version, --version`           - print the tool version


## License
[MIT License]('./LICENSE')
