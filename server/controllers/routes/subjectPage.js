const { subjectPageQ } = require('../../database/quieres/subjectPage');

const subjectPage = (req, res, next) => {
  const { id } = req.params;
  subjectPageQ(id)
    .then((data) => data.rows)
    .then((returnd) => {
      if (returnd.length === 0) {
        throw new Error('bad request');
      } else return returnd;
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
