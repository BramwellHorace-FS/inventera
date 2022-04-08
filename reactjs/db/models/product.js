'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.DECIMAL,
    minStock: DataTypes.DECIMAL,
    unitId: DataTypes.UUID,
    unitCost: DataTypes.DECIMAL,
    sku: DataTypes.STRING,
    categoryId: DataTypes.UUID,
    materialId: DataTypes.UUID,
    userId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};