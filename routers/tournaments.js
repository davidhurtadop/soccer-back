const express = require('express');

const router = express.Router();

const tournamentsController = require('../controllers/tournaments');

router.get('/', async(req, res) => {
  tournamentsController.getTournaments(req, res);
});

router.get('/:id', async(req, res) => {
  tournamentsController.getTournamentById(req, res);
});

router.post('/', async(req, res) => {
  tournamentsController.saveTournaments(req, res);
});

router.delete('/:id', async(req, res) => {
  tournamentsController.deleteTournaments(req, res);
});

router.put('/:id', async(req, res) => {
  tournamentsController.updateTournaments(req, res);
});

module.exports = router;
