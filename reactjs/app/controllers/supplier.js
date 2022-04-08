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
    const supplier = await Supplier.findOne({
      where: {
        id: req.params.id,
      },
    });

    const updatedSupplier = await supplier.update(req.body);

    res.status(200).json(updatedSupplier);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const supplier = await Supplier.findOne({
      where: {
        id: req.params.id,
      },
    });

    await supplier.destroy();

    res.status(200).json({ message: 'Supplier deleted' });
  } catch (err) {
    next(err);
  }
};
