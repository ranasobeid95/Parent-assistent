const connection = require('../config/connection');

const getTeacherProfile = () => connection.query(
  'select * from teacher inner join "user" on teacher.user_id="user".id ',
);

module.exports = { getTeacherProfile };
