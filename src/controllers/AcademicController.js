const CourseController = require("./CourseController");
const { Op } = require('sequelize');

const University = require("../models/university");
const Academic = require("../models/academic");
const Course = require("../models/course");
const User = require("../models/user");
         
Academic.belongsTo(Course, { foreignKey: 'course_id' });
Academic.belongsTo(User, { foreignKey: 'student' });
Academic.belongsTo(University, { foreignKey: 'uni' });

module.exports = {
    // /add/academic
    async add(req,res) {
        try {
            const { student, uni, course_id, startDate } = req.body;

            const month = new Date(startDate).getMonth();
            const year = new Date(startDate).getFullYear();
            const curso = await CourseController.findById(course_id);
            const durationInMonths = curso.durationInMonths;

            let userAc = {
                student,
                uni,
                course_id,
                startDate: month <= 5? new Date(`${year}-01-02`):new Date(`${year}-06-02`)
            }

            let endDate = new Date(userAc.startDate);
            endDate.setMonth(endDate.getMonth() + durationInMonths);
            userAc.endDate = endDate;

            console.log(userAc);

            await Academic.create(userAc)
            return res.json({
                mensagem: "Registro acadêmico cadastrado com sucesso!"
            })

        } catch (error) {
                console.log(error);
                return res.status(400).json({
                    mensagem: "Erro registrado no console. Não foi possível cadastrar."
                });
        }

    },
    // /academic/:id
    async findById(req,res){
        let id = req.params.id  

        try {

        const response = await Academic.findOne({
            where: {
                id: `${id}`
            },
            include: [
                {
                    model: User
                },
                {
                    model: Course
                },
                {
                    model: University
                }
            ]
        });
        
        res.json(response);

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            });
        }

    },
    // /academic-records
    async findAll(req,res) {
        try {

        const response = await Academic.findAll();
        
        res.json(response);

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            });
        }

    },
    // /academic/find/:letter
    async findByLetter(req,res) {
        try {
            const {letter} = req.params
            const response = await Academic.findAll({
               where: {
                    [Op.or]: [
                        {
                            '$User.name$': {
                                [Op.like]: `%${letter}%`
                            }
                        },
                        {
                            '$Course.name$': {
                                [Op.like]: `%${letter}%`
                            }
                        },
                        {
                            '$University.name$': {
                                [Op.like]: `%${letter}%`
                            }
                        },
                    ]
                },
                include: [
                    User,
                    Course,
                    University
                ]
                }
                )
           
            res.json(response)

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível encontrar."
            });
        }
    },
    // /academicdate/update/:id
    async updateDate(req,res) {
        let id = req.params.id

        if(!Academic.hasAlias('curso')){
            Academic.belongsTo(Course, { as: "curso", foreignKey: 'course_id' });
        }

        try {
            let inicio = new Date(req.body.inicio);

            let academic = await Academic.findOne({
                where: {
                    id: `${id}`
                },
                include: [
                    {
                        model: Course,
                        as: 'curso'
                    }
                ]
                });

            let duracaoMeses = academic.curso.durationInMonths;

            const month = new Date(inicio).getMonth();
            const year = new Date(inicio).getFullYear();

            inicio = month <= 5? new Date(`${year}-01-02`):new Date(`${year}-06-02`);

            let dataInicio = inicio;

            let dataFinal = new Date(dataInicio);
            dataFinal.setMonth(dataFinal.getMonth() + duracaoMeses);
            academic.startDate = dataInicio;
            academic.endDate = dataFinal;

            console.log(dataInicio, dataFinal, duracaoMeses);
            await academic.save();

            return res.json({
            mensagem:"Registro atualizado com sucesso."
            });

        } catch (error) {
                console.log(error);
                return res.status(400).json({
                    mensagem: "Erro registrado no console. Não foi possível atualizar."
                });
        }
    },
    // /academic/update/:id
    async updateById(req,res) {
        let id = req.params.id
        try {

            await Academic.update(req.body, {
                where: {
                    id: `${id}`
                }
            });

            return res.json({
                mensagem:"Registro atualizado com sucesso."
                });

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível atualizar."
            });
        }
    },
    // /academic/delete/:id
    async delete(req,res) {
        let id = req.params.id
        try {
            await Academic.destroy({
                where: {
                    id: `${id}`
                }
            });
            return res.json({
                mensagem: "Registro deletado com sucesso."
            });
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                mensagem: "Erro registrado no console. Não foi possível deletar."
            });
        }   
    }
};