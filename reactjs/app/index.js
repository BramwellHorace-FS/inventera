const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Route Imports
const userRouter = require('./routes/user');
const unitRouter = require('./routes/unit');
const categoryRouter = require('./routes/category');
const supplierRouter = require('./routes/supplier');
const productionBoardRouter = require('./routes/productionBoard');
const formulaRouter = require('./routes/formula');
const materialRouter = require('./routes/material');
const productRouter = require('./routes/product');
const productionRouter = require('./routes/production');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Use Routes
app.use('/api/users', userRouter);
app.use('/api/units', unitRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/suppliers', supplierRouter);
app.use('/api/boards', productionBoardRouter);
app.use('/api/formulas', formulaRouter);
app.use('/api/materials', materialRouter);
app.use('/api/products', productRouter);
app.use('/api/productions', productionRouter);

// General 404 error handler
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// General error handler
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../../client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  });
}

module.exports = app;
