const req = require("express/lib/request");
const Course = require("../models/course")

module.exports = {
    // /add/course
    async add(req,res) {
        try {
            await Course.create(req.body)
            return res.json({
                mensagem: "Curso cadastrado com sucesso!"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível cadastrar."
            })
        }
    },
    // /courses
    async findAll(req,res){
        try {
            const response = await Course.findAll();
            res.json(response);
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            })
        }
    },
    // /course/:id
    async findById(id) {
        try {
            const res = await Course.findOne({
                where: {
                        id
                }
            }) 
            return res;
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            })
        }
    },
    // /course/:letter
    async findByLetter(){
        try {
            let letter = req.params.letter
           const response = await Course.findAll({
               where: {
                   name: {
                       [Op.like]: `%${letter}%`
                    }
                }
            }) 
           res.json(response)
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            })
        }
    },
    // /course/update/:id
    async updateById(req,res) {
        id = req.params.id
        try {
            await Course.update(req.body, {
                where:{
                    id : `${id}`
                }
            })
            return res.json({
                mensagem: "Curso atualizado com sucesso!"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível atualizar."
            })
        }
    },
    // /courses/update
    async updateAll(req,res){
        try {
            await Course.update(req.body)

            return res.json({
                mensagem: "Curso atualizado com sucesso!"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível atualizar."
            })
        }
    },
    // /course/delete
    async delete(req,res) {
        let id = req.params.id
        try {
            await Course.destroy({
                where: {
                    id: `${id}`
                }
            })
            return res.json({
                mensagem: "Curso deletado com sucesso."
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível deletar."
            })
        }
    }
};