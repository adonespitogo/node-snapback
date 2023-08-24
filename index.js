#! /usr/bin/env node

const { install } = require("./actions/install");
const { print } = require("./actions/ls");
const { rollback } = require("./actions/rollback");
const { help } = require("./actions/help");
const version = require("./actions/version");

async function snapperRb() {
  const args = process.argv;
  if (args.length < 3) {
    return help();
  }

  const cmd = args[2];

  switch (cmd) {
    case "install":
      await install();
      break;
    case "ls":
      await print();
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

    case "v":
    case "-v":
    case "version":
    case "--version":
      version();
      break;

    default:
      help();
      break;
  }
}

snapperRb();
