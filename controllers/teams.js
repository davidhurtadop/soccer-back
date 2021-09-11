const dataTeam = require('../data/teams');

const getTeams = (req, response) => {
  dataTeam.getTeams(req, response);
};

const getTeamById = (req, response) => {
  dataTeam.getTeamById(req, response);
};

const saveTeam = (req, response) => {
  dataTeam.saveTeam(req, response);
};

const deleteTeam = (req, response) => {
  dataTeam.deleteTeam(req, response);
};

const updateTeam = (req, response) => {
  dataTeam.updateTeam(req, response);
};

module.exports = {
  getTeams,
  getTeamById,
  saveTeam,
  deleteTeam,
  updateTeam,
};
