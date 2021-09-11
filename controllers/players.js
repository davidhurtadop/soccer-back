const dataPlayer = require('../data/players');

const getPlayers = (req, response) => {
  dataPlayer.getPlayers(req, response);
};

const getPlayerById = (req, response) => {
  dataPlayer.getPlayerById(req, response);
};

const savePlayer = (req, response) => {
  dataPlayer.savePlayer(req, response);
};

const deletePlayer = (req, response) => {
  dataPlayer.deletePlayer(req, response);
};

const updatePlayer = (req, response) => {
  dataPlayer.updatePlayer(req, response);
};

module.exports = {
  getPlayers,
  getPlayerById,
  savePlayer,
  deletePlayer,
  updatePlayer,
};
