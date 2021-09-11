const express = require('express');

const router = express.Router();

const teamsController = require('../controllers/teams');

router.get('/', async(req, res) => {
  teamsController.getTeams(req, res);
});

router.get('/:id', async(req, res) => {
  teamsController.getTeamById(req, res);
});

router.post('/', async(req, res) => {
  teamsController.saveTeams(req, res);
});

router.delete('/:id', async(req, res) => {
  teamsController.deleteTeams(req, res);
});

router.put('/:id', async(req, res) => {
  teamsController.updateTeams(req, res);
});

module.exports = router;
