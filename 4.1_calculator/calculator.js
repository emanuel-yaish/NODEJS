// Write a calculator app that uses yargs.
// Create the following operations: (add, substract, multiply, pow).
// Eg:
// * node calc –add 1 2 // returns 3
// * node calc –sub 9 2 // returns 7
// * node calc –mult 2 4 // returns 8
// * node calc –pow 4 // returns 16
// const { describe } = require("yargs");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Calculator Add Operation",
  handler: function (argv) {
    console.log(argv._[1] + argv._[2]);
  },
});

yargs.command({
  command: "sub",
  describe: "Calculator Add Operation",
  handler: function (argv) {
    console.log(argv._[1] - argv._[2]);
  },
});

yargs.command({
  command: "mult",
  describe: "Calculator Add Operation",
  handler: function (argv) {
    console.log(argv._[1] * argv._[2]);
  },
});

yargs.command({
  command: "pow",
  describe: "Calculator Add Operation",
  handler: function (argv) {
    console.log(argv._[1] ** 2);
  },
});

yargs.parse();
