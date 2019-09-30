const jwt = require('jsonwebtoken');
require('env2')('./config.env');

const secret = process.env.SECRET_KEY;
const { getParentProfile } = require('../../database/quieres/parentProfile');

const parentPRofile = (req, res, next) => {
  getParentProfile()
    .then(({ rows }) => {
      if (req.cookies.access) {
        jwt.verify(req.cookies.access, secret, (error, value) => {
          if (value) {
            res.json(rows);
          } else {
            res.redirect('/');
          }
        });
      } else res.redirect('/');
    })
    .catch((err) => next(err));
};
module.exports = { parentPRofile };
