const { name, description } = require("../package.json");

module.exports = () => {
  const help = `
${name}
${description}

Usage:
\tsnapperjs <command> [arguments]

The commands are:
\tls \t\t\t\t to list available snapshots in '/.snapshots' directory.
\trollback [snapshot number] \t specify a snapshot number to rollback. For example: snapper-rb num 123
`;

  console.log(help);
};
