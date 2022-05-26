const Sequelize = require('sequelize');
const db = require('./db');

const University = db.define('universities', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
},
    {
        freezeTableName: true
    }
);

module.exports = University;