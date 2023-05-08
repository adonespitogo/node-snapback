const os = require("node:os");
const fs = require("node:fs/promises");
const path = require("node:path");
const { SNAPSHOTS_DIR, SNAPSHOTS_DELIM } = require("../config");

module.exports = async () => {
  const script_src = path.join(__dirname, "./read-snapshots.sh");

  let contents = await fs.readFile(script_src, "utf8");
  contents = contents
    .replace("$SNAPSHOTS_DIR", SNAPSHOTS_DIR)
    .replace("$SNAPSHOTS_DELIM", SNAPSHOTS_DELIM);

  const script_tmp = path.join(
    os.tmpdir() || "/tmp",
    `snapper-rb.sh`
  );

  await fs.writeFile(script_tmp, contents);
  return script_tmp;
};
