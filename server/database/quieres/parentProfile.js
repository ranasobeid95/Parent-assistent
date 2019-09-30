const connection = require('../config/connection');

const getParentProfile = (parentId) => connection.query(
  'select * from (select student_name, class from student  inner join parent on parent.id=student.parent_id) as t where t.parent_id = $1',
  [parentId],
);

module.exports = { getParentProfile };
