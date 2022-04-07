const { User, Unit } = require('../../db/models');
const { uuid } = require('uuidv4');
const error = require('../utils/errorHandling');

exports.create = async (req, res) => {
  try {
    const { name, email, password, businessName, website } = req.body;
    const user = await User.create({
      id: uuid(),
      name,
      email,
      password,
      businessName,
      website,
    });
    res.status(201).json(user);
  } catch (err) {
    error.handleError(err, req, res);
  }
};

exports.getOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [{ model: Unit, as: 'units' }],
    });
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json(user);
  } catch (err) {
    error.handleError(err, req, res);
  }
};
