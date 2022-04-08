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

      Product.hasMany(models.Material, {
        foreignKey: 'materialId',
        as: 'material',
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Name is required',
          },
          len: {
            args: [5, 50],
            msg: 'Name must be between 5 and 50 characters',
          },
        },
      },
      stock: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          notEmpty: {
            msg: 'Stock is required',
          },
          min: {
            args: [0],
            msg: 'Stock must be greater than 0',
          },
        },
      },
      minStock: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          notEmpty: {
            msg: 'Min Stock is required',
          },
          min: {
            args: [0],
            msg: 'Min Stock must be greater than 0',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Unit is required',
          },
        },
      },
      unitCost: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          notEmpty: {
            msg: 'Unit Cost is required',
          },
          min: {
            args: [0],
            msg: 'Unit Cost must be greater than 0',
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        validate: {
          max: {
            args: [50],
            msg: 'SKU must be less than 50 characters',
          },
        },
      },
      categoryId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Category is required',
          },
        },
      },
      materialId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material is required',
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
      modelName: 'Product',
    }
  );
  return Product;
};
