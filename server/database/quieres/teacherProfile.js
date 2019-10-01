const connection = require('../config/connection');

const getTeacherProfile = () => connection.query(
  'select first_name, last_name, bio, image_url from teacher inner join "user" on teacher.user_id="user".id ',
);

module.exports = { getTeacherProfile };
