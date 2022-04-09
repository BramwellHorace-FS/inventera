const { User } = require('../../db/models');
const { uuid } = require('uuidv4');

exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const user = await User.create({
      id: uuid(),
      ...req.body,
    });

    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
