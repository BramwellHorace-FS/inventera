const { ProductionBoard } = require('../../db/models');

exports.getAll = async (req, res, next) => {
  try {
    const boards = await ProductionBoard.findAll({
      attributes: ['id', 'name'],
    });
    res.status(200).json(boards);
  } catch (err) {
    next(err);
  }
};
