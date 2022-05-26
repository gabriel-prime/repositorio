const Friend = require('../../src/models/friend');
const User = require('../../src/models/user');

module.exports = {
    // /add/friend
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
                mensagem: "Erro: Não foi possível cadastrar amizade"
            })
        }
    },
    // /friends/
    async findAll(req,res){

    },
    // /friend/:id
    async findById(req, res) {
        try {
            let id = req.params.id;

            if (!Friend.hasAlias('users') 
            || !Friend.hasAlias('friends')) {
                Friend.belongsTo(User, { as: 'users', foreignKey: 'person_id' })
                Friend.belongsTo(User, { as: 'friends', foreignKey: 'friend_id'})
            }

            const response = await Friend.findOne({
                where: {
                    person_id: `${id}`
                },
                include: [
                    {
                        model: User,
                        as :'users'
                    },
                    {
                        model: User,
                        as :'friends'
                    }
                ]
            }
            );
            res.json(response);
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível achar amizade"
            })
        }
    },
    async findByLetter(){
        try {
            
            if(!Friend.hasAlias('name')){
                Friend.belongsTo(User, { as: 'name', foreignKey: 'person_id' })
            }

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
    },
    // /friend/update/:id
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
            mensagem: "Amizade atualizada com sucesso"
        })    
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível atualizar amizade"
            })
        }
    },
    // /friends/update
    async updateAll(){
        try {

            await Friend.update(req.body)
        
        return res.json({
            mensagem: "Amizade atualizada com sucesso"
        })    
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível atualizar amizade"
            })
        }
    },
    // /friend/delete/:id
    async delete(req,res){
        let id = req.params.id;
        try {
            await Friend.destroy({ where: { id: `${id}` } });
            return console.log('Amizade deletada') & res.json('ok')
        } catch (error) {
            console.log(error)
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Não foi possível deletar amizade"
            })
        }
    }
}