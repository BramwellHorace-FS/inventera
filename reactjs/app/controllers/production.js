const { Production } = require('../../db/models');
const { uuid } = require('uuidv4');
const { CustomError } = require('../utils/errors');

// GET /api/productions
exports.getAll = async (req, res, next) => {
  try {
    const productions = await Production.findAll({
      where: { userId: req.user.id },
    });

    res.status(200).json({
      status: 'success',
      message: 'Productions retrieved successfully',
      productions,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/productions/:id
exports.getOne = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    if (!production) {
      throw new CustomError('NotFoundError', 404, 'Production not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Production retrieved successfully',
      production,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/productions
exports.create = async (req, res, next) => {
  try {
    const production = await Production.create({
      id: uuid(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      status: 'success',
      message: 'Production created successfully',
      production,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/productions/:id
exports.update = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await production.update(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Production updated successfully',
      production,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/productions/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const production = await Production.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await production.destroy();

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
