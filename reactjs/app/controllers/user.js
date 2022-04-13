const { User } = require('../../db/models');
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');
const { CustomError } = require('../utils');

// GET /api/user
exports.getOne = async (req, res, next) => {
  try {
    const id = req.user.id;

    if (!id) throw new CustomError('NotFoundError', 404, 'User not found');

    const user = await User.findByPk(id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// PUT /api/user/:id
exports.update = async (req, res, next) => {
  try {
    const id = req.user.id;

    if (!id) throw new CustomError('NotFoundError', 404, `No user with id ${id}`);

    const user = await User.findByPk(id);
    const { email, password, name, businessName, website } = req.body;
    const salt = await bcrypt.genSalt(10);

    await user.update({
      name: name || user.name,
      email: email || user.email,
      password: password ? await bcrypt.hash(password, salt) : user.password,
      businessName: businessName || user.businessName,
      website: website || user.website,
    });

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
