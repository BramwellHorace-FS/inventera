const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
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
