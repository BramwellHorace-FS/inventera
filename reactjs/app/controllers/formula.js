const { Formula, Unit } = require('../../db/models');
const { uuid } = require('uuidv4');
const { throwError } = require('../utils');

// GET /api/formulas
exports.getAll = async (req, res, next) => {
  try {
    const formulas = await Formula.findAll({
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    res.status(200).json(formulas);
  } catch (error) {
    next(error);
  }
};

// GET /api/formulas/:id
exports.getOne = async (req, res, next) => {
  try {
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    res.status(200).json(formula);
  } catch (error) {
    next(error);
  }
};

// POST /api/formulas
exports.create = async (req, res, next) => {
  try {
    const formula = await Formula.create({
      id: uuid(),
      ...req.body,
      userId: req.user.id,
    });

    res.status(201).json(formula);
  } catch (error) {
    next(error);
  }
};

// PUT /api/formulas/:id
exports.update = async (req, res, next) => {
  try {
    // const { name, containerSize, containerFill, fragranceLoad, fragranceAmount, waxAmount, unitId, note } = req.body;
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
      include: [{ model: Unit, as: 'unit' }],
    });

    await formula.update(req.body);

    res.status(200).json(formula);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/formulas/:id
exports.deleteOne = async (req, res, next) => {
  try {
    const formula = await Formula.findByPk(req.params.id, {
      where: { userId: req.user.id },
    });

    await formula.destroy();

    res.status(204).json();
  } catch (error) {
    next(error);
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
//     const formulas = await Formula.findAll({
//       include,
//     });
//     res.status(200).json(formulas);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getOne = async (req, res, next) => {
//   try {
//     const formula = await Formula.findByPk(req.params.id, {
//       include,
//     });
//     res.status(200).json(formula);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.create = async (req, res, next) => {
//   try {
//     const formula = await Formula.create({
//       id: uuid(),
//       ...req.body,
//     });
//     res.status(201).json(formula);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.update = async (req, res, next) => {
//   try {
//     const formula = await Formula.findByPk(req.params.id);
//     await formula.update(req.body);
//     res.status(200).json(formula);
//   } catch (err) {
//     next(err);
//   }
// };

// exports.deleteOne = async (req, res, next) => {
//   try {
//     const formula = await Formula.findByPk(req.params.id);
//     await formula.destroy();
//     res.status(204).json();
//   } catch (err) {
//     next(err);
//   }
// };
