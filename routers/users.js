var express = require('express')
var router = express.Router()
var usersController = require('./../controllers/users')

router.get('/', async(req, res) => {
    usersController.getUsers(req, res)
})

router.post('/', async(req, res) => {
    usersController.saveUsers(req, res)
})

router.delete('/', async(req, res) => {
    usersController.deleteUsers(req, res)
})

router.put('/', async(req, res) => {
    usersController.updateUsers(req, res)
})

module.exports = router