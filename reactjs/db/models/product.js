'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
      });

      Product.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [5, 50],
            msg: 'Name must be between 5 and 50 characters',
          },
          isUnique: async (value, next) => {
            Product.findOne({
              where: {
                name: value,
              },
            }).then((product) => {
              if (product) {
                return next('Name already exists');
              } else {
                return next();
              }
            });
          },
        },
      },
      stock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Stock is required',
          },
        },
      },
      minStock: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Unit is required',
          },
        },
      },
      unitCost: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Unit Cost is required',
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        validate: {
          max: 50,
        },
      },
      categoryId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Category is required',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'User is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
