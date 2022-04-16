const jwt = require('jsonwebtoken');

// Generate a token with a payload
const generateToken = (id) => {
  try {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  } catch (error) {
    throw new CustomError('JWTError', 500, 'Error while generating token');
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
