const os = require("node:os");
const cp = require("node:child_process");

module.exports = async (num) => {
  return new Promise((resolve, reject) => {
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
};
