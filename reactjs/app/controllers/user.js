const { User, Unit, Category } = require('../../db/models');
const { handleError, throwError } = require('../utils/errorHandling');
const { uuid } = require('uuidv4');

exports.create = async (req, res) => {
  try {
    const user = await User.create({
      id: uuid(),
      ...req.body,
    });
    res.status(201).json(user);
  } catch (err) {
    handleError(err, req, res);
  }
};

exports.getOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [
        { model: Unit, as: 'units' },
        { model: Category, as: 'categories' },
      ],
    });
    if (!user) {
      throwError(404, 'User not found');
    }
    res.status(200).json(user);
  } catch (err) {
    handleError(err, req, res);
  }
};
