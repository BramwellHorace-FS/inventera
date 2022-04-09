'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Unit, {
        foreignKey: 'userId',
        as: 'units',
      });
      User.hasMany(models.Category, {
        foreignKey: 'userId',
        as: 'categories',
      });

      User.hasMany(models.Supplier, {
        foreignKey: 'userId',
        as: 'suppliers',
      });

      User.hasMany(models.Material, {
        foreignKey: 'userId',
        as: 'materials',
      });

      User.hasMany(models.ProductionBoard, {
        foreignKey: 'userId',
        as: 'productionBoards',
      });

      User.hasMany(models.Formula, {
        foreignKey: 'userId',
        as: 'formulas',
      });

      User.hasMany(models.Product, {
        foreignKey: 'userId',
        as: 'products',
      });

      User.hasMany(models.Production, {
        foreignKey: 'userId',
        as: 'productions',
      });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Name is required',
          },
          min: {
            args: 5,
            msg: 'Name must be at least 5 characters',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Email is not valid or already in use',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          min: {
            args: 8,
            msg: 'Password must be at least 8 characters',
          },
        },
      },
      businessName: {
        type: DataTypes.STRING,
        validate: {
          max: {
            args: 50,
            msg: 'Business name must be less than 50 characters',
          },
        },
      },
      website: {
        type: DataTypes.STRING,
        validate: {
          max: {
            args: 50,
            msg: 'Website must be less than 50 characters',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
