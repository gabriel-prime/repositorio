const Sequelize = require('sequelize');
const db = require('./db');

const Course = db.define('courses', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    durationInMonths: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Course;