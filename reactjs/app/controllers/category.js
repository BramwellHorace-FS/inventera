const { Category } = require('../../db/models');
const { uuid } = require('uuidv4');
const { CustomError } = require('../utils');

// GET /api/categories
exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      where: {
        userId: req.user.id,
      },
    });

    res.status(200).json({ categories });
  } catch (error) {
    next(error);
  }
};

// GET /api/categories/:id
exports.getOne = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    if (!category) throw new CustomError('NotFoundError', 404, 'Category not found');

    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

// POST /api/categories
exports.create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await Category.create({
      name,
      userId: req.user.id,
      id: uuid(),
    });

    res.status(201).json({ category });
  } catch (error) {
    next(error);
  }
};

// PUT /api/categories/:id
exports.update = async (req, res, next) => {
  try {
    const { name } = req.body;

    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await category.update({ name });

    res.status(200).json({ category });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/categories/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await category.destroy();

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
