const { Material, Category, Supplier, Unit } = require('../../db/models');
const { v4: uuidv4 } = require('uuid');
const { CustomError } = require('../utils/errors');

// GET /api/materials
exports.getAll = async (req, res, next) => {
  try {
    const materials = await Material.findAll({
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    res.status(200).json({
      status: 'success',
      message: 'Materials retrieved successfully',
      materials,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/materials/:id
exports.getOne = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    if (!material) {
      throw new CustomError('NotFoundError', 404, 'Material not found');
    }

    res.status(200).json({
      status: 'success',
      message: 'Material retrieved successfully',
      material,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/materials
exports.create = async (req, res, next) => {
  try {
    const material = await Material.create({
      id: uuidv4(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json({
      status: 'success',
      message: 'Material created successfully',
      material,
    });
  } catch (err) {
    next(err);
  }
};

// PUT /api/materials/:id
exports.update = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [
        { model: Category, as: 'category' },
        { model: Supplier, as: 'supplier' },
        { model: Unit, as: 'unit' },
      ],
    });

    await material.update(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Material updated successfully',
      material,
    });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/materials/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const material = await Material.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await material.destroy();

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
