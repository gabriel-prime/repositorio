const User = require('../../src/models/user')
const { Op } = require("sequelize");

module.exports = {
    async add(req,res) {
        console.log(req.body)
        await User.create(req.body)
        .then(() => {
            return res.json({
                erro:false,
                mensagem: "Usuário cadastrado com sucesso!"
            })
        }).catch(() => {
            return res.status(400).json({
                erro:true,
                mensagem: "Erro: Não foi possível cadastrar usuário"
            })
        })
    },
    async findById(req,res){
        let id = req.params.id

        try {
            const response = await User.findOne({
                where: {
                    id: `${id}`
                }
            });
            res.json(response);
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível achar usuário"
            })
        }
    },
    async findAll(req,res) {
        try {
            console.log('oi')
            const response = await User.findAll();
            res.json(response);
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível achar usuários"
            })
        }
    },
    async updateById(req,res){
        let id = req.params.id;
        try {
            console.log(req.body)

            await User.update(req.body, {
                where: {
                  id: `${id}`
                }
            })
        
        return res.json({
            erro:false,
            mensagem:"Usuário atualizado com sucesso"
        })    
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível atualizar usuário"
            })
        }
    },
    async updateAll(req,res){
        try {
            await User.update(req.body, {
                where:{}
            })
            return res.json({
                erro:false,
                mensagem:"Usuário atualizado com sucesso"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível atualizar usuário"
            })
        }
    },
    async delete(req,res){
        let id = req.params.id;
        try {
            await User.destroy({
                where: {
                    id: `${id}`
                }
            });
            return console.log('Usuário deletado') & res.json('ok')
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível deletar usuário"
            })
        }
    },
    async findByLetter(req,res){
        //vamos encontrar registros que contem certa letra
        try {
            let letter = req.params.letter
           const response = await User.findAll({
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
                erro: true,
                mensagem: "Erro: Não foi possível achar usuário"
            })
        }
    }
}