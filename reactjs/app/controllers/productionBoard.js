const { ProductionBoard, Production } = require('../../db/models');

exports.getAll = async (req, res, next) => {
  try {
    const boards = await ProductionBoard.findAll({
      where: { userId: req.user.id },
      include: [
        {
          model: Production,
          as: 'productions',
        },
      ],
      attributes: ['id', 'name'],
    });
    res.status(200).json({
      status: 'success',
      message: 'Production boards retrieved successfully',
      boards,
    });
  } catch (err) {
    next(err);
  }
};
