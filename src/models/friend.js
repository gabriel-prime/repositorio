const Sequelize = require('sequelize');
const db = require('./db');

const Friend = db.define('friend', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    person_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { 
            model: 'users', 
            key: 'user_id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
    },
    friend_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: { 
            model: 'users', 
            key: 'user_id' 
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
    },
},
    {
        freezeTableName: true
    }
);


//Friend.sync();

module.exports = Friend;