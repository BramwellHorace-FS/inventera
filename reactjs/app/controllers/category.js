const { Category } = require('../../db/models');
const { uuid } = require('uuidv4');

exports.getAll = async (req, res, next) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });

    res.status(200).json(categories);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name'],
    });

    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const category = await Category.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const category = await Category.update({ ...req.body }, { where: { id: req.params.id } });

    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(204).json(category);
  } catch (err) {
    next(err);
  }
};
