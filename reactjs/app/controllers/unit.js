const { Unit } = require('../../db/models');
const error = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  try {
    const units = await Unit.findAll({
      attributes: ['id', 'name', 'abbr'],
    });

    if (!units) {
      return res.status(404).json({
        error: 'No units found',
      });
    }

    res.status(200).json(units);
  } catch (err) {
    error.handleError(err, req, res);
  }
};
