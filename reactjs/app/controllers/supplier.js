const { Supplier } = require('../../db/models');
const { uuid } = require('uuidv4');

exports.getAll = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll({
      attributes: ['id', 'name'],
    });

    res.status(200).json(suppliers);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const supplier = await Supplier.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name'],
    });

    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
