'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductionBoard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.ProductionBoard.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  ProductionBoard.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Name is required',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'User is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'ProductionBoard',
    }
  );
  return ProductionBoard;
};
