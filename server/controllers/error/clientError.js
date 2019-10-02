const clientError = (req, res) => {
  res.status(404)
    .send('clientError');
};

module.exports = { clientError };
