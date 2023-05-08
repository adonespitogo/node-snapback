# node-snapper-rollback
A snapper-rollback tool for listing and rolling back snapper btrfs snapshots.

## System Requirements:

- `snapper-rollback`
- `sudo`


## Usage

```
Usage:
        snapper-rb <command> [arguments]

The commands are:
        ls                       to list available snapshots in '/.snapshots' directory.
        num [snapshot number]    specify a snapshot number to rollback. For example: snapper-rb num 123

```

## License
[MIT License]('./LICENSE')
