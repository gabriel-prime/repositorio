const express = require('express')
const routes = express.Router()
const CourseController = require('../controllers/CourseController');

//adicionar um curso
routes.post('/add/course', CourseController.add);

//achar um curso
routes.get('/course/:id', async (req,res) => {
    const course = await CourseController.findById(req.params.id);
    res.send(course)
});

//atualizar curso
routes.put('/course/update/:id', CourseController.updateById);

//deletar curso
routes.delete('/course/delete/:id', CourseController.delete);

module.exports = routes