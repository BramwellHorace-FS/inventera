'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Formula.init({
    name: DataTypes.STRING,
    containerSize: DataTypes.DECIMAL,
    containerFill: DataTypes.DECIMAL,
    fragranceLoad: DataTypes.DECIMAL,
    fragranceAmount: DataTypes.DECIMAL,
    waxAmount: DataTypes.DECIMAL,
    unitId: DataTypes.UUID,
    note: DataTypes.STRING,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Formula',
  });
  return Formula;
};