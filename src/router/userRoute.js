const express = require('express')
const routes = express.Router()
const UserController = require('../controllers/UserController')

//cadastrar usuarios
routes.post('/add', UserController.add);

//buscar todos usuarios
routes.get('/usuarios', UserController.findAll);

//buscar usuario pela id
routes.get('/usuario/:id', UserController.findById);

//buscar usuario pela letra
routes.get('/usuario/find/:letter', UserController.findByLetter);

//atualizar usuarios pelo id
routes.put('/usuario/update/:id', UserController.updateById);

//atualizar todos usuarios
routes.put('/usuarios/update/', UserController.updateAll);

//deletar usuarios
routes.delete('/usuario/delete/:id', UserController.delete);

module.exports = routes

