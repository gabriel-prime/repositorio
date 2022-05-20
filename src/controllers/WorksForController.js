const WorksFor = require('../models/worksFor');
const User = require('../models/user');
const Position = require('../models/position');
const Company = require('../models/company');
const { Op } = require("sequelize");
const db = require('../models/db')

module.exports = {
    async add(req, res) {
        //console.log(req.body)
        await WorksFor.create(req.body)
            .then(() => {
                return res.json({
                    erro: false,
                    mensagem: "Contrato de trabalho empregado com sucesso!"
                })
            }).catch(() => {
                return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Não foi possível vincular o contrado de trabalho"
                })
            })
    },
    async findById(req, res) {
        try {
            let id = req.params.id
            
                WorksFor.belongsTo(User, { foreignKey: 'employee_id' })
                WorksFor.belongsTo(Position, { foreignKey: 'position_id' })
                WorksFor.belongsTo(Company, { foreignKey: 'company_id' })
            

            const response = await WorksFor.findAll({
                where: {
                    id: `${id}`
                },
                include: [
                    {
                        model: User
                    },
                    {
                        model: Position
                    },
                    {
                        model: Company
                    },

                ]    
            })
            res.json(response);
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    },
    async findAll(req, res) {
        try {
            const response = await WorksFor.findAll();
            res.json(response);
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    },
    async updateById(req, res) {
        let id = req.params.id;
        try {
            console.log(req.body)

            await WorksFor.update(req.body, {
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
    },
    async updateAll(req, res) {
        try {
            await WorksFor.update(req.body, {
                where: {}
            })
            return res.json({
                erro: false,
                mensagem: "Usuário atualizado com sucesso"
            })
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    },
    async delete(req, res) {
        let id = req.params.id;
        try {
            await WorksFor.destroy({
                where: {
                    id: `${id}`
                }
            });
            return console.log('Usuário deletado') & res.json('ok')
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    },
    async findByLetter(req, res) {
        //vamos encontrar registros que contem certa letra
        try {
            let letra = req.params.letra
            let id = req.params.id
            
            if (!WorksFor.hasAlias('employee') || !WorksFor.hasAlias('position') || !WorksFor.hasAlias('company')) {
                WorksFor.belongsTo(User, { as: 'employee', foreignKey: 'employee_id' })
                WorksFor.belongsTo(Position, { as: 'position', foreignKey: 'position_id' })
                WorksFor.belongsTo(Company, { as: 'company', foreignKey: 'company_id' })
            }

            const response = await WorksFor.findAll({
                include: [{
                    employee_id: {
                        model: 'user',
                        required: true,
                        attributes: ['name']
                    },
                    position_id: {
                        model: 'position',
                        required: true,
                        attributes: ['name']
                    },
                     company_id: {
                         model: 'company',
                         required: true,
                         attributes: ['name']
                     }
                    
                }]
            })
            res.json(response)
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    }
}