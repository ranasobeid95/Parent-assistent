const connection = require('../config/connection');

const loginData = (email) => connection.query(
  'select email, password, parent.parent_id, parent.id  from "user" inner join parent on parent.user_id="user".id where "user".email=$1',
  [email],
);

module.exports = { loginData };
