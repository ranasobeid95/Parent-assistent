const { getParentProfile } = require('../../database/quieres/parentProfile');

const parentPRofile = (req, res, next) => {
  // const { id } = req.cookies;
  getParentProfile()
    .then((result) => result.rows)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
};
module.exports = { parentPRofile };
