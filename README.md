# node-snapperjs
A snapper-rollback tool for listing and rolling back snapper btrfs snapshots.

## System Requirements:

- [snapper](https://wiki.archlinux.org/title/snapper)
- [snapper-rollback](https://aur.archlinux.org/packages/snapper-rollback)

## Install

`npm i -g @adonesp/snapperjs`

## Usage

List snapshots in `/.snapshots`:

```
snapperjs ls
```

Rollback to snapshot:

```
snapperjs rollback 123 
```

Where `123` is the number of brtfs snapshot.

## Commands

- `ls`                          - to list available snapshots in '/.snapshots' directory.
- `rollback [snapshot number]`    - specify a snapshot number to rollback. For example: `snapperjs rollback 123`


## License
[MIT License]('./LICENSE')
