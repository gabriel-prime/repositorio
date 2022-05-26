'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('academic', {
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
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
        freezeTableName: true
    }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('academic');
  }
};

//npx sequelize cli db:migrate:undo --name anynameof-migration.js