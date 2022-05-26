const Sequelize = require('sequelize');
const db = require('./db');

const User = db.define('users', {
    user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNasc: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

module.exports = User;