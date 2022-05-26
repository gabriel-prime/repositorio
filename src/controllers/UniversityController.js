const University = require("../models/university");
const { Op } = require("sequelize");

module.exports = {
    // /add/university
    async add(req,res) {
        try {
            await University.create(req.body)
            return res.json({
                mensagem: "Universidade cadastrada com sucesso!"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível cadastrar."
            })
        }
    },
    // /university/:id
    async findById(req,res) {

        let id = req.params.id

        try {
            const response = await University.findOne({ 
                where: {
                        id: `${id}` 
                } 
            });
            res.json(response);

        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível cadastrar."
            })
        }
    },
    // /universities
    async findAll(req,res){
        try {
            const resp = await University.findAll()
            res.json(resp);
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            })
        }
    },
    // /university/find/:letter
    async findByLetter(req,res){
        try {
            let letter = req.params.letter
           const response = await University.findAll({
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
    // /university/update/:id
    async updateById(req,res) {
        id = req.params.id
        try {
            await University.update(req.body, {
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
    // /university/delete/:id
    async delete(req,res) {
        let id = req.params.id
        try {
            await University.destroy({
                where: {
                    id: `${id}`
                }
            })
            return res.json({
                mensagem: "Universidade deletada com sucesso."
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível deletar."
            })
        }
    }
};