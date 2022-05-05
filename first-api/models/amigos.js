const Sequelize = require('sequelize');
const sequelize = require('../mysql');
const User = require('./usuarios');

const Friend = sequelize.define('friend',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey: true
    },
    person_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: "users",
            key: "user_id"
        }
    },
    friend_id:{
        type:Sequelize.INTEGER,
        foreignKey: true,
        allowNull:false,
        references: {
            model: "users",
            key: "user_id"
        }
    }
},
{freezeTableName: true});


//verifica se há alterações e atualiza a tabela
//Friend.sync({alter: true})
//cria a tabela
//Friend.sync();

module.exports = Friend