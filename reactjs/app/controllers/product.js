const { Product, Unit } = require('../../db/models');
const { uuid } = require('uuidv4');

const include = [
  {
    model: Unit,
    as: 'unit',
    attributes: ['id', 'name', 'abbr'],
  },
];

exports.getAll = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include,
    });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include,
    });

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const product = await Product.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.update(req.body);

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();

    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
