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
    const supplier = await Supplier.findByPk(req.params.id, {
      attributes: ['id', 'name'],
    });

    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const supplier = await Supplier.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(supplier);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    await supplier.update(req.body);
    res.status(200).json(supplier);

    res.status(200).json(updatedSupplier);
  } catch (err) {
    next(err);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    await supplier.destroy();
    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
