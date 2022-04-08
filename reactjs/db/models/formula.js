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
        validate: {
          notEmpty: {
            msg: 'Please enter a name',
          },
          len: {
            args: [5, 50],
            msg: 'Name must be between 5 and 50 characters',
          },
        },
      },
      containerSize: {
        type: DataTypes.DECIMAL,
        validate: {
          notEmpty: {
            msg: 'Please enter a container size',
          },
          min: {
            args: [0],
            msg: 'Container size must be greater than 0',
          },
        },
        containerFill: {
          type: DataTypes.DECIMAL,
          validate: {
            notEmpty: {
              msg: 'Please enter a container fill',
            },
            min: {
              args: [0],
              msg: 'Container fill must be greater than 0',
            },
          },
        },
      },
      fragranceLoad: {
        type: DataTypes.DECIMAL,
        validate: {
          notEmpty: {
            msg: 'Please enter a fragrance load',
          },
          min: {
            args: [0],
            msg: 'Fragrance load must be greater than 0',
          },
        },
      },
      fragranceAmount: {
        type: DataTypes.DECIMAL,
        validate: {
          notEmpty: {
            msg: 'Please enter a fragrance amount',
          },
          min: {
            args: [0],
            msg: 'Fragrance amount must be greater than 0',
          },
        },
      },
      waxAmount: {
        type: DataTypes.DECIMAL,
        validate: {
          notEmpty: {
            msg: 'Please enter a wax amount',
          },
          min: {
            args: [0],
            msg: 'Wax amount must be greater than 0',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Please select a unit',
          },
        },
      },
      note: {
        type: DataTypes.STRING,
        validate: {
          maxLength: {
            args: [50],
            msg: 'Note must be less than 50 characters',
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
      modelName: 'Formula',
    }
  );
  return Formula;
};
