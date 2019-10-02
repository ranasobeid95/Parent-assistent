const { getTeacherProfile } = require('../../database/quieres/teacherProfile');

const teacherProfile = (req, res, next) => {
  const { id } = req.params;
  getTeacherProfile(id)
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch(next);
};
module.exports = { teacherProfile };
