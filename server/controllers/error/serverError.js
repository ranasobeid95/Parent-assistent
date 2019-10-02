const serverError = (err, req, res, next) => {
  res.status(500)
    .send('serverError');

  next();
};

module.exports = { serverError };
