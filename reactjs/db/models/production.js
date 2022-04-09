'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Production extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Production.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      Production.belongsTo(models.ProductionBoard, {
        foreignKey: 'productionBoardId',
        as: 'productionBoard',
      });
    }
  }
  Production.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Please enter a name',
          },
          isUnique: async (value, next) => {
            Production.findOne({
              where: {
                name: value,
              },
            }).then((production) => {
              if (production) {
                return next('Name already exists');
              } else {
                return next();
              }
            });
          },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: 'Please enter a quantity',
          },
          min: {
            args: [1],
            msg: 'Quantity must be greater than 0',
          },
        },
      },
      status: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            msg: 'Please enter a status',
          },
          min: {
            args: [0],
            msg: 'Status must be greater than 0',
          },
          max: {
            args: [2],
            msg: 'Status must be less than 2',
          },
        },
      },
      dueDate: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: 'Please enter a due date',
          },
          isDate: {
            msg: 'Please enter a valid date',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Please enter a user',
          },
        },
      },
      productionBoardId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Please enter a production board',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Production',
    }
  );
  return Production;
};
