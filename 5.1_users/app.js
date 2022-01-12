const yargs = require("yargs");
const uniqid = require("uniqid");
const users = require("./users");

yargs.command({
  command: "getUsers",
  describe: "get all users",
  handler() {
    console.log(users.getUsers());
  },
});

yargs.command({
  command: "addUser",
  describe: "Add a new user",
  builder: {
    name: {
      describe: "User Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User Email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.addUser(argv.name, argv.email);
  },
});

yargs.command({
  command: "deleteUser",
  describe: "Delete user",
  builder: {
    userID: {
      describe: "User ID",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.deleteUser(argv.userID);
  },
});

yargs.command({
  command: "updateUser",
  describe: "Delete user",
  builder: {
    userID: {
      describe: "User ID",
      demandOption: true,
      type: "string",
    },
    name: {
      describe: "User Name",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "User Email",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    users.updateUser(argv.userID, argv.name, argv.email);
  },
});

yargs.parse();
