const { Category } = require('../../db/models');
const { handleError, throwError } = require('../utils/errorHandling');
const { uuid } = require('uuidv4');

exports.getAll = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    handleError(err, req, res);
  }
};

exports.getOne = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      throwError(404, 'Category not found');
    }

    res.status(200).json(category);
  } catch (err) {
    handleError(err, req, res);
  }
};

exports.create = async (req, res) => {
  try {
    const category = await Category.create({
      id: uuid(),
      ...req.body,
    });
    res.status(201).json(category);
  } catch (err) {
    handleError(err, req, res);
  }
};

exports.update = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      throwError(404, 'Category not found');
    }

    await category.update(req.body);
    res.status(200).json(category);
  } catch (err) {
    handleError(err, req, res);
  }
};

exports.delete = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);

    if (!category) {
      throwError(404, 'Category not found');
    }

    await category.destroy();

    res.status(204).json();
  } catch (err) {
    handleError(err, req, res);
  }
};
