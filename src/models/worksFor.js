const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./user')

const WorksFor = db.define('worksfors', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    employee_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    position_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'position', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'company', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    wage: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

//WorksFor.sync();

module.exports = WorksFor