const dataUsers = require('../data/users');

const getUsers = (req, response) => {
  dataUsers.getUsers(req, response);
};

const getUserById = (req, response) => {
  dataUsers.getUserById(req, response);
};

const saveUsers = (req, response) => {
  dataUsers.saveUsers(req, response);
};

const deleteUsers = (req, response) => {
  dataUsers.deleteUsers(req, response);
};

const updateUsers = (req, response) => {
  dataUsers.updateUsers(req, response);
};

module.exports = {
  getUsers,
  getUserById,
  saveUsers,
  deleteUsers,
  updateUsers,
};
