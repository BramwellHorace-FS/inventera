exports.handleError = (err, req, res) => {
  if (err.errors) {
    const errors = Object.values(err.errors).map((error) => error.message);
    return res.status(400).json({ errors });
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({ message });
};
