const jwt = require('jsonwebtoken');

// Throw an error with a message and status code
exports.throwError = (message, status) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};

// Generate a token with a payload
exports.generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  } catch (error) {
    throwError('Error generating token', 500);
  }
};
