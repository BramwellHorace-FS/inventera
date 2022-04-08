'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: 'Supplier name is required',
          },
          len: {
            args: [3, 50],
            msg: 'Supplier name must be between 3 and 50 characters',
          },
          isUnique: function (value, next) {
            Supplier.findOne({
              where: {
                name: value,
              },
            }).then(function (supplier) {
              if (supplier) {
                next('Supplier name already exists');
              } else {
                next();
              }
            });
          },
        },
      },
      userId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'Supplier',
    }
  );
  return Supplier;
};
