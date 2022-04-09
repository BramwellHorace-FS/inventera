'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Production.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    dueDate: DataTypes.DATE,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Production',
  });
  return Production;
};