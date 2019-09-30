const { getClassActivities } = require('../../database/quieres/getClassActivities');

module.exports = (req, res, next) => {
  const { subjectId, classId } = req.params;
  getClassActivities(subjectId, classId)
    .then((result) => result.rows)
    .then((allActivities) => {
      res.status(200).send({ statusCode: 200, allActivities });
    })
    .catch(next);
};
