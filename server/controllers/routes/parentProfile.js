const { getParentProfile } = require('../../database/quieres/parentProfile');

const parentPRofile = (req, res, next) => {
  const id = req.cookies.parentid;
  getParentProfile(id)
    .then((result) => result.rows)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => next(err));
};
module.exports = { parentPRofile };
