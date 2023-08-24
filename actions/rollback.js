const fs = require("fs-extra");
const cp = require("node:child_process");
const { list } = require("./ls");

exports.rollback = async (num) => {
  await new Promise((resolve, reject) => {
    const proc = cp.spawn("snapper-rollback", [num]);
    proc.stdin.setDefaultEncoding("utf8");

    process.stdin.on("data", (data) => {
      console.log("stdin: ", String(data));
      proc.stdin.write(String(data) + "\n");
      proc.stdin.end();
      process.stdin.pause();
    });

    proc.stdout.on("data", (out) => {
      process.stdout.write(out);
    });

    proc.stderr.on("data", (err) => {
      console.log(String(err));
    });

    proc.on("close", (code) => {
      if (code > 0) {
        console.log("Process exited with code: " + code);
        reject(code);
      } else {
        resolve(code);
      }
    });
  });

  const snaps = await list();
  const snap = snaps.find((snap) => snap.num === num);
  if (!snap) {
    console.warn("Unable to find snapshot: ", num);
    return;
  }

  const description = snap.description;

  // If description is "Linux backup for 6.4.11-arch2-1 => ./bootbackup/6.4.11-arch2-1_20230806023652",
  // copy the contents of the directory to /boot
  const regex = /Linux backup for (.*) => (.*)/;
  const match = description.match(regex);
  if (match) {
    const backupDir = match[2];
    const exists = await fs.exists(backupDir);
    if (exists) {
      await fs.copy(backupDir, "/boot");
    } else {
      console.warn("Unable to find backup directory: ", backupDir);
    }
  } else {
    console.warn("Unable to parse description: ", description);
  }
};
