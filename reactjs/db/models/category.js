'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Category name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Category name must be between 3 and 50 characters',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'User id is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );
  return Category;
};
