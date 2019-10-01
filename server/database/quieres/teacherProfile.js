const connection = require('../config/connection');

const getTeacherProfile = (id) => connection.query(
  'select first_name, last_name, bio, image_url from teacher inner join "user" on teacher.user_id="user".id where "user".id=$1 ',
  [id],
);

module.exports = { getTeacherProfile };
