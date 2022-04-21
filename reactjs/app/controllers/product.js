const { Product, Unit, Category } = require('../../db/models');
const { uuid } = require('uuidv4');
const { CustomError } = require('../utils/errors');

// GET /api/products
exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Products retrieved successfully',
      products,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    if (!product) {
      throw new CustomError('NotFoundError', 404, 'Product not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Product retrieved successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/products
exports.create = async (req, res, next) => {
  try {
    const product = await Product.create({
      id: uuid(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      status: 'success',
      message: 'Product created successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/products/:id
exports.update = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Unit, as: 'unit' },
        { model: Category, as: 'category' },
      ],
    });

    await product.update(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      product,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await product.destroy();

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
