'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unit.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      Unit.hasMany(models.Material, {
        foreignKey: 'unitId',
        as: 'materials',
      });

      Unit.hasMany(models.Product, {
        foreignKey: 'unitId',
        as: 'products',
      });

      Unit.hasMany(models.Formula, {
        foreignKey: 'unitId',
        as: 'formulas',
      });
    }
  }
  Unit.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Unit name is required',
          },
          min: {
            args: 4,
            msg: 'Unit name must be at least 4 characters',
          },
        },
      },
      abbr: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Unit abbreviation is required',
          },
          min: {
            args: 1,
            msg: 'Unit abbreviation must be at least 1 character',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: { msg: 'User ID is required' },
        },
      },
    },
    {
      sequelize,
      modelName: 'Unit',
    }
  );
  return Unit;
};
