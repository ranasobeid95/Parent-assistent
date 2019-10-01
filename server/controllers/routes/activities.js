const {
  getClassActivities,
} = require('../../database/quieres/getClassActivities');

const classActivities = (req, res, next) => {
  const { subjectId, classId } = req.params;
  if (Number(subjectId) && Number(classId)) {
    getClassActivities(subjectId, classId)
      .then((result) => result.rows)
      .then((allActivities) => {
        if (allActivities.length > 0) {
          res.status(200).json({ allActivities });
        } else {
          res.status(404).json({ message: 'No Activities available' });
        }
      })
      .catch(next);
  } else {
    res.status(400).json({ message: 'Bad Request' });
  }
};
module.exports = { classActivities };
