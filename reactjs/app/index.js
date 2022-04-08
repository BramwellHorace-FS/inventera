const express = require('express');
const cors = require('cors');
const app = express();
const { handleError, throwError } = require('./utils/errorHandling');

const userRouter = require('./routes/user');
const unitRouter = require('./routes/unit');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/units', unitRouter);

app.use((req, res) => {
  try {
    throwError(404, 'The requested resource was not found');
  } catch (err) {
    handleError(err, req, res);
  }
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
