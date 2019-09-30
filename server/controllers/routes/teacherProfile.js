const jwt = require('jsonwebtoken');
const { getTeacherProfile } = require('../../database/quieres/teacherProfile');

require('env2')('./config.env');

const secret = process.env.SECRET_KEY;

const teacherProfile = (req, res, next) => {
  getTeacherProfile()
    .then(({ rows }) => {
      if (req.cookies.access) {
        jwt.verify(req.cookies.access, secret, (error, value) => {
          if (value) {
            res.json(rows);
          } else {
            res.redirect('/');
          }
        });
      }
    })
    .catch((err) => next(err));
};
module.exports = { teacherProfile };
