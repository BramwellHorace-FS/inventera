const { Material, Category, Supplier, Unit } = require('../../db/models');
const { uuid } = require('uuidv4');
const { throwError } = require('../utils');

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

    res.status(200).json(materials);
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

    if (!material) throwError(404, 'Material not found');

    res.status(200).json(material);
  } catch (err) {
    next(err);
  }
};

// POST /api/materials
exports.create = async (req, res, next) => {
  try {
    const material = await Material.create({
      id: uuid(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(material);
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

    res.status(200).json(material);
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

// const include = [
//   {
//     model: Category,
//     as: 'category',
//     attributes: ['id', 'name'],
//   },
//   {
//     model: Unit,
//     as: 'unit',
//     attributes: ['id', 'name', 'abbr'],
//   },
//   {
//     model: Supplier,
//     as: 'supplier',
//     attributes: ['id', 'name'],
//   },
// ];

// exports.getAll = async (req, res, next) => {
//   try {
//     const materials = await Material.findAll({
//       include,
//     });

//     res.status(200).json(materials);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getOne = async (req, res, next) => {
//   try {
//     const material = await Material.findByPk(req.params.id, {
//       include,
//     });

//     res.status(200).json(material);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.create = async (req, res, next) => {
//   try {
//     const material = await Material.create({
//       id: uuid(),
//       ...req.body,
//     });

//     res.status(201).json(material);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const material = await Material.findByPk(req.params.id);
//     await material.update(req.body);

//     res.status(200).json(material);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const material = await Material.findByPk(req.params.id);
//     await material.destroy();

//     res.status(204).json();
//   } catch (err) {
//     next(err);
//   }
// };
