const express = require('express')
const routes = express.Router()
const UserController = require('./UserController')
const FriendController = require('./FriendController')

//cadastrar dados
routes.post('/add', UserController.add);

//buscar todos dados
routes.get('/usuarios', UserController.findAll);

//buscar dados pela id
routes.get('/usuario/:id', UserController.findById);

//buscar dados pela letra
routes.get('/usuario/find/:letra', UserController.findByLetter);

//atualizar dados pelo id
routes.put('/usuario/update/:id', UserController.updateById);

//atualizar todos dados
routes.put('/usuarios/update/', UserController.updateAll);

//deletar dados
routes.delete('/usuario/delete/:id', UserController.delete);

//adicionar amigo
routes.post('/add/friend', FriendController.add);

//achar amigos de uma pessoa
routes.get('/friends/:id', FriendController.findById);

//atualizar amizades
routes.put('/friend/update/:id', FriendController.updateById);

module.exports = routes