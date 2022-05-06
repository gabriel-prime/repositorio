const Friend = require('../models/amigos');
const User = require('../models/usuarios');

module.exports = {
    async add(req, res) {
        console.log(req.body);
        try {
            await Friend.create(req.body)
            return res.json({
                erro: false,
                mensagem: "Amigo cadastrado com sucesso!"
            })
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível cadastrar usuário"
            })
        }
    },
    async findById(req, res) {
        try {
            let id = req.params.id;

            Friend.belongsTo(User, { as: 'usuario', foreignKey: 'person_id' })
            Friend.belongsTo(User, { as: 'amigo', foreignKey: 'friend_id'})

            const response = await Friend.findAll({
                where: {
                    person_id: `${id}`
                },
                include: [
                    {
                        model: User,
                        as :'usuario'
                    },
                    {
                        model: User,
                        as :'amigo'
                    }
                ]
            }
            );
            //res.json(response);
            res.json(response);
        } catch (error) {
            console.log(error);
            return res.status(400).send("erro registrado no console");
        }
    },
    async updateById(req,res){
        let id = req.params.id;
        try {
            console.log(req.body)

            await Friend.update(req.body, {
                where: {
                  id: `${id}`
                }
              })
        
        return res.json({
            erro: false,
            mensagem: "Usuário atualizado com sucesso"
        })    
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    }
}