const { User } = require('../../db/models');
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
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json(user);
  } catch (err) {
    return error.handleError(err, req, res);
  }
};
