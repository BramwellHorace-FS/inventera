const { User } = require('../../db/models');
const { uuid } = require('uuidv4');
const bcrypt = require('bcrypt');

// GET /api/users/:id
exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// PUT /api/users/:id
exports.update = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    const { email, password, name, businessName, website } = req.body;
    const salt = await bcrypt.genSalt(10);

    const updatedUser = {
      email: email || user.email,
      password: password ? await bcrypt.hash(password, salt) : user.password,
      name: name || user.name,
      businessName: businessName || user.businessName,
      website: website || user.website,
    };

    await user.update(updatedUser);

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
