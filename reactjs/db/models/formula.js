'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Formula extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Formula.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
      });

      Formula.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  Formula.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a name',
          },
        },
      },
      containerSize: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a container size',
          },
        },
      },
      containerFill: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a container fill',
          },
        },
      },
      fragranceLoad: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a fragrance load',
          },
        },
      },
      fragranceAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a fragrance amount',
          },
        },
      },
      waxAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a wax amount',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a unit',
          },
        },
      },
      note: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a note',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Please enter a user',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Formula',
    }
  );
  return Formula;
};
