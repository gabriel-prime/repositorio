const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./user')

const Friend = db.define('friends', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    person_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    friend_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
});


//Friend.sync();

module.exports = Friend