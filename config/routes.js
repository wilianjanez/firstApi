const express = require('express')
const usersController = require('../api/controllers/users-controller')
const routes = express.Router()

routes.get('/users', usersController.list)
routes.post('/users', usersController.create)
routes.delete('/users/:id', usersController.delete)

module.exports = routes