const Sequelize = require('sequelize');
const db = require('./db');

const Academic = db.define('academic', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    student: {
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
    uni: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: { 
          model: 'universities', 
          key: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    course_id: {
      type: Sequelize.INTEGER,
      foreignKey: true,
      references: { 
          model: 'courses', 
          key: 'id' 
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    },
    startDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  },
  {
      freezeTableName: true
  }
  );

  module.exports = Academic;