exports.handleError = (err, req, res) => {
  if (err.errors) {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ errors });
  }

  const status = err.status || 500;
  const message = err.message || 'Something went wrong';

  res.status(status).json({ message });
};

exports.throwError = (status, message) => {
  const error = new Error(message);
  error.status = status;
  throw error;
};
