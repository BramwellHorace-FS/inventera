const { Product, Unit, Category } = require('../../db/models');
const { uuid } = require('uuidv4');
const { throwError } = require('../utils');

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

    res.status(200).json(products);
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

    if (!product) throwError(404, 'Product not found');

    res.status(200).json(product);
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

    res.status(201).json(product);
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

    res.status(200).json(product);
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

// const include = [
//   {
//     model: Unit,
//     as: 'unit',
//     attributes: ['id', 'name', 'abbr'],
//   },
// ];

// exports.getAll = async (req, res, next) => {
//   try {
//     const products = await Product.findAll({
//       include,
//     });

//     res.status(200).json(products);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.getOne = async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id, {
//       include,
//     });

//     res.status(200).json(product);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.create = async (req, res, next) => {
//   try {
//     const product = await Product.create({
//       id: uuid(),
//       ...req.body,
//     });

//     res.status(201).json(product);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     await product.update(req.body);

//     res.status(200).json(product);
//   } catch (error) {
//     next(error);
//   }
// };

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const product = await Product.findByPk(req.params.id);
//     await product.destroy();

//     res.status(204).json();
//   } catch (error) {
//     next(error);
//   }
// };
