const { name, description, version } = require("../package.json");

exports.help = () => {
  const help = `${name} version ${version}
${description}

Usage:
\tsnapback <command> [arguments]

The commands are:
\tinstall \t\t to install pacman hook scripts.
\tls \t\t\t to list available snapshots in '/.snapshots' directory.
\tnum [snapshot number] \t specify a snapshot number to rollback. For example: snapper-rb num 123

To rollback to a previously working kernel, find a snapshot using \`sudo snapback ls\` with a description like:
\tLinux backup for [kernel version] => [backup directory]

Then rollback to it using: sudo snapback num [snapshot number]
`;

  console.log(help);
};
