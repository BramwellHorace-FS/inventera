const { Unit } = require('../../db/models');
const { handleError, throwError } = require('../utils/errorHandling');

exports.getAll = async (req, res) => {
  try {
    const units = await Unit.findAll({
      attributes: ['id', 'name', 'abbr'],
    });

    if (!units) {
      throwError(404, 'Units not found');
    }

    res.status(200).json(units);
  } catch (err) {
    handleError(err, req, res);
  }
};
