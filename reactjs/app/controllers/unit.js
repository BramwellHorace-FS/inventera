const { Unit } = require('../../db/models');

exports.getAll = async (req, res, next) => {
  try {
    const units = await Unit.findAll({
      attributes: ['id', 'name', 'abbr'],
    });

    res.status(200).json(units);
  } catch (err) {
    next(err);
  }
};
