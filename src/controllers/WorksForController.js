const WorksFor = require('../models/worksFor');
const User = require('../models/user');
const Position = require('../models/position');
const Company = require('../models/company');
const { Op } = require("sequelize");
const db = require('../models/db');
const { models } = require('mongoose');

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

            const { letra } = req.params

            WorksFor.belongsTo(User, { foreignKey: 'employee_id' })
            WorksFor.belongsTo(Position, { foreignKey: 'position_id' })
            WorksFor.belongsTo(Company, { foreignKey: 'company_id' })

            const response = await WorksFor.findAll({
                where: {
                    [Op.or]: [
                        {
                            '$User.name$': { [Op.like]: `%${letra}%` }
                        },
                        {
                            '$Company.name$': { [Op.like]: `%${letra}%` }
                        },
                        {
                            '$Position.name$': { [Op.like]: `%${letra}%` }
                        }
                    ]
                },
                include: [
                    User,
                    Position,
                    Company
                ]
            })


            res.json(response)
        } catch (error) {
            res.send("Erro registrado no console")
            console.log(error)
        }
    },
    async findByIdEmployee(req, res) {
        try {
            let id = req.params.id

            WorksFor.belongsTo(User, { foreignKey: 'employee_id' })
            WorksFor.belongsTo(Position, { foreignKey: 'position_id' })
            WorksFor.belongsTo(Company, { foreignKey: 'company_id' })


            const response = await WorksFor.findAll({
                where: {
                    employee_id: `${id}`
                },
                attributes: ['id', 'employee_id', 'position_id', 'company_id'],

                include: [
                    {
                        model: User,
                        attributes: ['id', 'name', 'surname', 'age']
                    },
                    {
                        model: Position,
                        attributes: ['id', 'name']
                    },
                    {
                        model: Company,
                        attributes: ['id', 'name', 'start']
                    },

                ]
            })
            res.json(response);
        } catch (error) {
            res.send("erro registrado no console")
            console.log(error)
        }
    },
    async findByIdPosition(req, res) {
        try {
            let id = req.params.id

            WorksFor.belongsTo(User, { foreignKey: 'employee_id' })
            WorksFor.belongsTo(Position, { foreignKey: 'position_id' })
            WorksFor.belongsTo(Company, { foreignKey: 'company_id' })


            const response = await WorksFor.findAll({
                where: {
                    position_id: `${id}`
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
    async findByIdCompany(req, res) {
        try {
            let id = req.params.id

            WorksFor.belongsTo(User, { foreignKey: 'employee_id' })
            WorksFor.belongsTo(Position, { foreignKey: 'position_id' })
            WorksFor.belongsTo(Company, { foreignKey: 'company_id' })


            const response = await WorksFor.findAll({
                where: {
                    company_id: `${id}`
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
    }
}