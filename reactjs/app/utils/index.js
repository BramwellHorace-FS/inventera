const jwt = require('jsonwebtoken');

// Generate a token with a payload
const generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  } catch (error) {
    throwError('Error generating token', 500);
  }
};

// Custom error handler
class CustomError extends Error {
  constructor(name, status, message) {
    super();
    this.name = name;
    this.message = message;
    this.status = status;
  }
}

module.exports = {
  CustomError,
  generateToken,
};
