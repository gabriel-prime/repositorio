const express = require('express')
const routes = express.Router()
const FriendController = require('../controllers/FriendController')

//adicionar amigo
routes.post('/add/friend', FriendController.add);

//achar amigos de uma pessoa
routes.get('/friend/:id', FriendController.findById);

routes.get('/friend/:letter', FriendController.findByLetter);

//atualizar amizades
routes.put('/friend/update/:id', FriendController.updateById);

//deletar amizades
routes.delete('/friend/delete/:id', FriendController.delete);

module.exports = routes