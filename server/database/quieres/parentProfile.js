const connection = require('../config/connection');

const getParentProfile = () => connection.query(
  'select student_name, class from student  inner join parent on parent.id=student.parent_id',
);

module.exports = { getParentProfile };
