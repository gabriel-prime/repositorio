const express = require('express')
const routes = express.Router()
const AcademicController = require('../controllers/AcademicController');

//adicionar um registro academico
routes.post('/add/academic', AcademicController.add);

//achar um registro academico
routes.get('/academic/:id', AcademicController.findById);

//achar todos registros academicos
routes.get('/academic-records', AcademicController.findAll);

//achar registro academico pela letra
routes.get('/academic/find/:letter', AcademicController.findByLetter);

//atualizar data do registro academico
routes.put('/academicdate/update/:id', AcademicController.updateDate);

//atualizar info do registro academico
routes.put('/academic/update/:id', AcademicController.updateById);

//deletar registro academico
routes.delete('/academic/delete/:id', AcademicController.delete);

module.exports = routes