const { name, description } = require("../package.json");

module.exports = () => {
  const help = `
${name}
${description}

Usage:
\tsnapper-rb <command> [arguments]

The commands are:
\tls \t\t\t to list available snapshots in '/.snapshots' directory.
\tnum [snapshot number] \t specify a snapshot number to rollback. For example: snapper-rb num 123
`;

  console.log(help);
};
