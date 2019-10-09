const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  res.status(500).send({ error: { code: 500, msg: 'Internal Server Error' }, data: null });
  next();
};

module.exports = { serverError };
