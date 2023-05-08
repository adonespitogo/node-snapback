const cp = require("node:child_process");
const xml2js = require("xml2js");
const makeSH = require("./make-sh.js");
const { SNAPSHOTS_DELIM } = require("../config.js");

module.exports = async () => {
  const parser = new xml2js.Parser({});

  const shfile = await makeSH();

  const contents = await new Promise((resolve, reject) => {
    const proc = cp.spawn("sudo", ["sh", shfile]);

    let stdout = "";
    proc.stdout.on("data", (data) => {
      stdout += String(data);
    });

    proc.on("close", (code) => {
      if (code > 0) {
        console.log("Process exited with code: " + code);
        reject(code);
      } else {
        resolve(stdout);
      }
    });
  });

  const snaps = contents.split(SNAPSHOTS_DELIM).map(async (snap) => {
    const info = await parser.parseStringPromise(snap);
    return JSON.parse(JSON.stringify(info));
  });

  return await Promise.all(snaps).then((snaps) => {
    // console.log(snaps);
    // return snaps;
    return snaps
      .filter((snap) => snap !== null)
      .map((obj) => {
        // console.log("Obj?", obj.snapshot);
        // return obj;
        const snap = obj.snapshot;
        return {
          type: snap.type[0],
          num: parseInt(snap.num[0]),
          date: new Date(snap.date[0]),
          description: snap.description[0],
          cleanup: snap.cleanup[0],
        };
      });
  });
};
