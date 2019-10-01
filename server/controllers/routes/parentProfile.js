const { getParentProfile } = require('../../database/quieres/parentProfile');

const parentPRofile = (req, res, next) => {
  getParentProfile()
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch((err) => next(err));
};
module.exports = { parentPRofile };
