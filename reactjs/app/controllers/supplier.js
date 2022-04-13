const { Supplier } = require('../../db/models');
const { uuid } = require('uuidv4');
const { throwError } = require('../utils');

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

    if (!supplier) throwError(404, 'Supplier not found');

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

// exports.getAll = async (req, res, next) => {
//   try {
//     const suppliers = await Supplier.findAll({
//       attributes: ['id', 'name'],
//     });

//     res.status(200).json(suppliers);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getOne = async (req, res, next) => {
//   try {
//     const supplier = await Supplier.findByPk(req.params.id, {
//       attributes: ['id', 'name'],
//     });

//     res.status(200).json(supplier);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.create = async (req, res, next) => {
//   try {
//     const supplier = await Supplier.create({
//       id: uuid(),
//       ...req.body,
//     });

//     res.status(201).json(supplier);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const supplier = await Supplier.findByPk(req.params.id);
//     await supplier.update(req.body);
//     res.status(200).json(supplier);

//     res.status(200).json(updatedSupplier);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const supplier = await Supplier.findByPk(req.params.id);
//     await supplier.destroy();
//     res.status(204).json();
//   } catch (err) {
//     next(err);
//   }
// };
