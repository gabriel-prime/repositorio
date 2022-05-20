const Sequelize = require('sequelize');
const db = require('./db');

const Company = db.define('companies', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    start: {
        type: Sequelize.DATE,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);


//Company.sync();

module.exports = Company