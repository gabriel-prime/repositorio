const express = require('express')
const routes = express.Router()
const UniversityController = require('../controllers/UniversityController');

//adicionar uma universidade
routes.post('/add/university', UniversityController.add);

//achar uma universidade
routes.get('/university/:id', UniversityController.findById);

//achar todas universidades
routes.get('/universities', UniversityController.findAll);

//buscar universidade pela letra
routes.get('/university/find/:letter', UniversityController.findByLetter);

//atualizar amizades
routes.put('/university/update/:id', UniversityController.updateById);

//deletar universidade
routes.delete('/university/delete/:id', UniversityController.delete);

module.exports = routes