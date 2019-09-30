const getClassHomeworks = require('../../database/quieres/getClassHomeworks');

module.exports = (req, res, next) => {
  const { subjectId, classId, homeworkDate } = req.params;
  getClassHomeworks(subjectId, classId, homeworkDate)
    .then((result) => result.rows)
    .then((Homewoks) => {
      res.status(200).send({ Homewoks });
    })
    .catch(next);
};
