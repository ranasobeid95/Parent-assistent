const { getTeacherProfile } = require('../../database/quieres/teacherProfile');


const teacherProfile = (req, res, next) => {
  getTeacherProfile()
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch((err) => next(err));
};
module.exports = { teacherProfile };
