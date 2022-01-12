const fs = require("fs");
const uniqid = require("uniqid");

const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("users.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);

    // const dataBuffer = fs.readFileSync("users.json");
    // const dataJson = dataBuffer.toString();
    // const parsedDataJson = JSON.parse(dataJson);
    // if (parsedDataJson.length >= 0) return parsedDataJson;
    // else return [parsedDataJson];
  } catch (err) {
    return [];
  }
};

const saveUsers = (users) => {
  console.log("saveUsers");
  const dataJson = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJson);
};

const getUsers = () => {
  return loadUsers();
};

const addUser = (name, email) => {
  //   debugger;
  const users = loadUsers();
  users.push({ name, email, id: uniqid() });
  saveUsers(users);
};

const deleteUser = (userID) => {
  const users = loadUsers();
  const newUsers = users.filter((user) => user.id !== userID);
  if (users.length > newUsers.length) {
    console.log("User deleted successfully");
    saveUsers(newUsers);
  } else {
    console.log("User not found!");
  }
};

const updateUser = (userID, updatedName, updatedEmail) => {
  const users = loadUsers();

  const userToUpdate = users.find((user) => user.id === userID);

  if (userToUpdate) {
    if (updatedName) userToUpdate.name = updatedName;
    if (updatedEmail) userToUpdate.email = updatedEmail;
    console.log("User updated");
    saveUsers(newUsers);
  }
};

module.exports = {
  getUsers: getUsers,
  addUser: addUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
