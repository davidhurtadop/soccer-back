const express = require('express');

const router = express.Router();

const playerTypesController = require('../controllers/playerTypes');

router.get('/', async(req, res) => {
  playerTypesController.getPlayerTypes(req, res);
});

module.exports = router;
