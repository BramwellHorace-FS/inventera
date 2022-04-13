const jwt = require('jsonwebtoken');
const { throwError } = require('../utils');

exports.authenticate = (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throwError('Not Authorized', 401);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      throwError('Not Authorized', 401);
    }

    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};
