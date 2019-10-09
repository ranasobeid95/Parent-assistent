const { getParentProfile } = require('../../database/quieres/parentProfile');

const parentPRofile = (req, res, next) => {
  const { id } = req.params;
  getParentProfile(id)
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch(next);
};
module.exports = { parentPRofile };
