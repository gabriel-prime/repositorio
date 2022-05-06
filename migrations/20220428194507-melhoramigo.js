'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
    async up (queryInterface, Sequelize) {
      return Promise.all([
    /**
     * Add altering commands here.
     *
     * Example:
     */ 
    await queryInterface.addColumn('friend', 'melhoramigo', { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false 
    })
    ])
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.removeColumn('friend', 'melhoramigo')
  }
};