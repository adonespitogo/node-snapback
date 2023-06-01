const xml2js = require("xml2js");
const path = require("node:path");
const fs = require("node:fs/promises");
const { SNAPSHOTS_DIR } = require("../config.js");

module.exports = async () => {
  const parser = new xml2js.Parser({});
  const nums = await fs.readdir(SNAPSHOTS_DIR);
  const snaps = [];

  for (const num of nums) {
    const xml = path.join(SNAPSHOTS_DIR, num, "info.xml");
    const contents = await fs.readFile(xml, "utf8");
    const info = await parser.parseStringPromise(contents);
    const obj = JSON.parse(JSON.stringify(info));
    const snap = obj.snapshot;
    snaps.push({
      type: snap.type && snap.type[0],
      num: snap.num && parseInt(snap.num[0]),
      date: snap.date && new Date(snap.date[0]),
      description: snap.description && snap.description[0],
      cleanup: snap.cleanup && snap.cleanup[0],
    });
  }

  snaps.sort(function (a, b) {
    return a.num - b.num;
  });

  console.log(`--------|-------|---------------`);
  console.log(`num\t|type\t|description`);
  console.log(`--------|-------|---------------`);

  for (const snap of snaps) {
    console.log(`${snap.num}\t|${snap.type}\t|${snap.description}`);
  }
};
