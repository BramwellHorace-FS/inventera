const { User, Unit, Category } = require('../../db/models');
const { uuid } = require('uuidv4');

exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'email', 'businessName', 'website'],
      include: [
        {
          model: Unit,
          as: 'units',
          attributes: ['id', 'name', 'abbr'],
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
        },
      ],
    });

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
