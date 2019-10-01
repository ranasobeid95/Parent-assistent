const {
  getClassHomeworks,
} = require('../../database/quieres/getClassHomeworks');

const homeworks = (req, res, next) => {
  const { subjectId, classId } = req.params;
  const homeworkDate = new Date().toLocaleDateString();
  getClassHomeworks(subjectId, classId, homeworkDate)
    .then((result) => result.rows)
    .then((Homewoks) => {
      res.json({ data: Homewoks });
    })
    .catch(next);
};

module.exports = { homeworks };
