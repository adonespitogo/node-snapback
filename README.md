# node-snapback
A tool for listing and rolling back snapper btrfs snapshots, including `/boot` EFI directory.

## System Requirements:
- NodeJs
- [snapper](https://wiki.archlinux.org/title/snapper)
- [snapper-rollback](https://aur.archlinux.org/packages/snapper-rollback)
- a user with `sudo` access

## Install

`npm i -g @adonesp/snapbackjs`

## Usage

Install pacman hook scripts:

```
sudo snapback install
```

It will install the pacman hooks which will automatically backup your `/boot` directory everytime you install a new kernel.
Each snapshot created by the pacman hook will have a description `Linux backup for [kernel version] => [backup directory]`.

List the snapshots in `/.snapshots`:

```
sudo snapback ls
```

Rollback to a snapshot:

```
sudo snapback num 123
```

Where `123` is the number of brtfs snapshot created by the pacman hook. This will also restore the corresponding EFI files in `/boot` directory.

## Commands

- `install`                     - to install the pacman hook scripts.
- `ls, list`                          - to list available snapshots in '/.snapshots' directory.
- `num [snapshot number]`       - specify a snapshot number to rollback. For example: `snapback num 123`
- `v, -v, version, --version`   - print the tool version


## License
[MIT License]('./LICENSE')
