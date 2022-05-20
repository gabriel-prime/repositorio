const express = require('express')
const routes = express.Router()
const PositionController = require('../controllers/PositionController')

//cadastrar dados
routes.post('/position/add', PositionController.add);

//buscar todos dados
routes.get('/position/usuarios', PositionController.findAll);

//buscar dados pela id
routes.get('/position/usuario/:id', PositionController.findById);

//buscar dados pela letra
routes.get('/position/usuario/find/:letra', PositionController.findByLetter);

//atualizar dados pelo id
routes.put('/position/usuario/update/:id', PositionController.updateById);

//atualizar todos dados
routes.put('/position/usuarios/update/', PositionController.updateAll);

//deletar dados
routes.delete('/position/usuario/delete/:id', PositionController.delete);

module.exports = routes