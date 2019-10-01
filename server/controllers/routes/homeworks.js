const { getClassHomeworks } = require('../../database/quieres/getClassHomeworks');

const homeworks = (req, res, next) => {
  const { subjectId, classId } = req.params;
  const homeworkDate = '2018-11-11';
  getClassHomeworks(subjectId, classId, homeworkDate)
    .then((result) => result.rows)
    .then((Homewoks) => {
      res.json({ Homewoks });
    })
    .catch(next);
};

module.exports = { homeworks };
