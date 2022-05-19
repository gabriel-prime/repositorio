const Sequelize = require('sequelize');
const db = require('./db');

const Position = db.define('positions', {
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
},
{
    freezeTableName: true
}
);


//Position.sync();

module.exports = Position