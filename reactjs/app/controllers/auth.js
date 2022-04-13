const { User } = require('../../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const { throwError } = require('../utils/errors');
const { generateToken } = require('../utils/jwt');

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists by email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throwError('User not found', 404);
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error message and 401 status code
    if (!isPasswordValid) {
      throwError('Invalid credentials', 401);
    }

    // if password is correct, return success message and 200 status code
    res.status(200).json({
      isLoggedIn: true,
      message: 'User logged in successfully',
      status: 200,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { email, password, name, businessName, website } = req.body;

    // checks if user already exists
    const user = await User.findOne({ where: { email } });

    // if user exists, return error message and 401 status code
    if (user) {
      throwError('User already exists', 409);
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await User.create({
      id: uuidv4(),
      email,
      password: hashedPassword,
      name,
      businessName,
      website,
    });

    // if user is created, return success message and 200 status code
    if (newUser) {
      res.status(201).json({
        message: 'User created successfully',
        status: 201,
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      });
    } else {
      throwError('User creation failed', 400);
    }
  } catch (err) {
    next(err);
  }
};

// POST /api/auth/logout

// Status codes and their meanings for reference:
// 200 OK: Success
// 201 Created: Success
// 202 Accepted: Success
// 204 No Content: Success
// 400 Bad Request: Failure
// 401 Unauthorized: Failure
// 403 Forbidden: Failure
// 404 Not Found: Failure
// 409 Conflict: Failure
// 500 Internal Server Error: Failure
// 503 Service Unavailable: Failure
// 504 Gateway Timeout: Failure
// 511 Network Authentication Required: Failure
