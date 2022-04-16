const { Supplier } = require('../../db/models');
const { uuid } = require('uuidv4');
const { CustomError } = require('../utils');

// GET /api/suppliers
exports.getAll = async (req, res, next) => {
  try {
    const suppliers = await Supplier.findAll({
      where: { userId: req.user.id },
    });

    res.status(200).json(suppliers);
  } catch (error) {
    next(error);
  }
};

// GET /api/suppliers/:id
exports.getOne = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    if (!supplier) throw new CustomError('NotFoundError', 404, 'Supplier not found');

    res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
};

// POST /api/suppliers
exports.create = async (req, res, next) => {
  try {
    const supplier = await Supplier.create({
      id: uuid(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(supplier);
  } catch (error) {
    next(error);
  }
};

// PUT /api/suppliers/:id
exports.update = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await supplier.update(req.body);

    res.status(200).json(supplier);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/suppliers/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await supplier.destroy();

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
