const xml2js = require("xml2js");
const readSnapshots = require("../utils/read-snapshots");

module.exports = async () => {
  const snaps = await readSnapshots();
  for (const snap of snaps) {
    console.log(`${snap.num}\t|${snap.type}\t|${snap.description}`)
  }
};
