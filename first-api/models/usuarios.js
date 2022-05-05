const Sequelize = require('sequelize');
const sequelize = require('../mysql');

const User = sequelize.define('user',{
    user_id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey: true
    },
    name:{type: Sequelize.STRING, allowNull: false},
    surname:{type: Sequelize.STRING, allowNull:false},
    DataNasc:{type: Sequelize.DATEONLY, allowNull: false}
})

//verifica se há alterações e atualiza a tabela
//User.sync({alter: true})
//cria a tabela
//User.sync();

module.exports = User