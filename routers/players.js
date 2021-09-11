const express = require('express');

const router = express.Router();

const playersController = require('../controllers/players');

router.get('/', async(req, res) => {
  playersController.getPlayers(req, res);
});

router.get('/:id', async(req, res) => {
  playersController.getPlayerById(req, res);
});

router.post('/', async(req, res) => {
  playersController.savePlayers(req, res);
});

router.delete('/:id', async(req, res) => {
  playersController.deletePlayers(req, res);
});

router.put('/:id', async(req, res) => {
  playersController.updatePlayers(req, res);
});

module.exports = router;
