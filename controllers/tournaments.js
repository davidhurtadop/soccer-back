const dataTournament = require('../data/tournaments');

const getTournaments = (req, response) => {
  dataTournament.getTournaments(req, response);
};

const getTournamentById = (req, response) => {
  dataTournament.getTournamentById(req, response);
};

const saveTournament = (req, response) => {
  dataTournament.saveTournament(req, response);
};

const deleteTournament = (req, response) => {
  dataTournament.deleteTournament(req, response);
};

const updateTournament = (req, response) => {
  dataTournament.updateTournament(req, response);
};

module.exports = {
  getTournaments,
  getTournamentById,
  saveTournament,
  deleteTournament,
  updateTournament,
};
