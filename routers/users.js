const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', async(req, res) => {
  usersController.getUsers(req, res);
});

router.get('/:id', async(req, res) => {
  usersController.getUserById(req, res);
});

router.post('/', async(req, res) => {
  usersController.saveUsers(req, res);
});

router.delete('/:id', async(req, res) => {
  usersController.deleteUsers(req, res);
});

router.put('/:id', async(req, res) => {
  usersController.updateUsers(req, res);
});

module.exports = router;
