'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Material.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'category',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Unit, {
        foreignKey: 'unitId',
        as: 'unit',
        onDelete: 'CASCADE',
      });

      Material.belongsTo(models.Supplier, {
        foreignKey: 'supplierId',
        as: 'supplier',
        onDelete: 'CASCADE',
      });

      Material.hasMany(models.Product, {
        foreignKey: 'materialId',
        as: 'products',
        onDelete: 'CASCADE',
      });
    }
  }
  Material.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Material name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Material name must be between 3 and 50 characters',
          },
          isUnique: function (value, next) {
            Material.findOne({
              where: {
                name: value,
              },
            }).then(function (material) {
              if (material) {
                next('Material name already exists');
              } else {
                next();
              }
            });
          },
        },
      },
      stock: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: {
            args: [0],
            msg: 'Material stock must be greater than or equal to 0',
          },
        },
      },
      minStock: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: {
            args: [0],
            msg: 'Material minimum stock must be greater than or equal to 0',
          },
        },
      },
      unitId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material unit is required',
          },
        },
      },
      unitCost: {
        type: DataTypes.DECIMAL(10, 2),
        validate: {
          min: {
            args: [0],
            msg: 'Material unit cost must be greater than or equal to 0',
          },
        },
      },
      sku: {
        type: DataTypes.STRING,
        validate: {
          max: {
            args: [50],
            msg: 'Material SKU must be less than 50 characters',
          },
        },
      },
      categoryId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material category is required',
          },
        },
      },
      supplierId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material supplier is required',
          },
        },
      },
      lastOrdered: {
        type: DataTypes.DATE,
        validate: {
          isDate: {
            msg: 'Material last ordered date is not a valid date',
          },
        },
      },
      userId: {
        type: DataTypes.UUID,
        validate: {
          notEmpty: {
            msg: 'Material user is required',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'Material',
    }
  );
  return Material;
};
