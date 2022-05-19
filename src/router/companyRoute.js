const express = require('express')
const routes = express.Router()
const CompanyController = require('../controllers/CompanyController')

//cadastrar dados
routes.post('/company/add', CompanyController.add);

//buscar todos dados
routes.get('/company/usuarios', CompanyController.findAll);

//buscar dados pela id
routes.get('/company/usuario/:id', CompanyController.findById);

//buscar dados pela letra
routes.get('/company/usuario/find/:letra', CompanyController.findByLetter);

//atualizar dados pelo id
routes.put('/company/usuario/update/:id', CompanyController.updateById);

//atualizar todos dados
routes.put('/company/usuarios/update/', CompanyController.updateAll);

//deletar dados
routes.delete('/company/usuario/delete/:id', CompanyController.delete);

module.exports = routes