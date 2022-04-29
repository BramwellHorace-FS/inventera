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

      Production.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
      });

      Production.belongsTo(models.Product, {
        foreignKey: 'productId',
        as: 'product',
      });
    }
  }
  Production.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUnique: async (value, next) => {
            Production.findOne({
              where: {
                name: value,
                userId: this.userId,
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
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Quantity is required',
          },
        },
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      productionBoardId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Please enter a production board',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Production',
    }
  );
  return Production;
};
