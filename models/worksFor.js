'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class worksFor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  worksFor.init({
    employee_id: DataTypes.INTEGER,
    position_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    wage: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'worksFor',
  });
  return worksFor;
};