const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const createError = require('http-errors');
const app = express();

const userRouter = require('./routes/user');
const unitRouter = require('./routes/unit');
const categoryRouter = require('./routes/category');
const supplierRouter = require('./routes/supplier');
const productionBoardRouter = require('./routes/productionBoard');
const formulaRouter = require('./routes/formula');
const materialRouter = require('./routes/material');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/users', userRouter);
app.use('/api/units', unitRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/suppliers', supplierRouter);
app.use('/api/boards', productionBoardRouter);
app.use('/api/formulas', formulaRouter);
app.use('/api/materials', materialRouter);

app.use((req, res, next) => {
  next(createError.NotFound());
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, '../client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//   });
// }

module.exports = app;
