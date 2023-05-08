#! /usr/bin/env node

const ls = require("./actions/ls");
const rollback = require("./actions/rollback");
const help = require("./actions/help");

async function snapperRb() {
  const args = process.argv;
  if (args.length < 3) {
    return help();
  }

  const cmd = args[2];

  switch (cmd) {
    case "ls":
      await ls();
      break;

    case "num":
      if (args.length < 4) {
        return help();
      }
      const num = args[3];
      await rollback(num).catch((err) => {
        console.log("Error in rollback: ", err);
      });
      break;

    default:
      help();
      break;
  }
}

snapperRb();
