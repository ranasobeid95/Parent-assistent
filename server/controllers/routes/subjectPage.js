const { subject } = require('../../database/quieres/subjectPage');

const subjectPage = (req, res, next) => {
  const { id } = req.params;
  subject(id)
    .then((data) => data.rows)
    .then((rows) => {
      if (rows.length === 0) {
        throw new Error('bad request');
      } else return rows;
    })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      if (err.message === 'bad request') {
        res.status(400).send({
          error: 'bad request',
          'Status-Code': 400,
        });
      }
      next(err);
    });
};

module.exports = { subjectPage };
