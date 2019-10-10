const clientError = (req, res) => {
  res.status(404).send({ error: { code: 404, msg: 'Not Found' }, data: null });
};

module.exports = { clientError };
