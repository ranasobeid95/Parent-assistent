const connection = require('../config/connection');

const getClassHomeworks = (subjectId, classId, homeworkDate) => {
  const sql = {
    text: 'select homework_description,urls from homework where subject_id= $1 and class = $2  and homework_date= $3',
    values: [
      subjectId,
      classId,
      homeworkDate,
    ],
  };

  return connection.query(sql);
};

module.exports = { getClassHomeworks };
