const jwt = require('jsonwebtoken');
const { throwError } = require('../utils/errors');

exports.generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  } catch (error) {
    throwError('Error generating token', 500);
  }
};
