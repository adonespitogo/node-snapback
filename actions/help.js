const { name, description, version } = require("../package.json");

module.exports = () => {
  const help = `${name} version ${version}
${description}

Usage:
\tsnapback <command> [arguments]

The commands are:
\tls \t\t\t to list available snapshots in '/.snapshots' directory.
\tnum [snapshot number] \t specify a snapshot number to rollback. For example: snapper-rb num 123

NOTE: These commands may require super user privilge.
`;

  console.log(help);
};
