const fs = require("fs");
const uniqid = require("uniqid");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (err) {
    return [];
  }
};

const saveUsers = (users) => {
  const dataJson = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJson);
};

const getUsers = () => {
  console.log("get users");
};

const addUser = (name, email) => {
  const users = loadUsers();

  users.push({ name, email, id: uniqid() });

  saveUsers(users);
};

const deletUser = (userID) => {
  console.log("deletUser users");
};

const updateUser = (userID) => {
  console.log("updateUser users");
};

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  deletUser: deletUser,
  updateUser: updateUser,
};
