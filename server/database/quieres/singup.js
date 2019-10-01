const connection = require('../config/connection');

exports.findUser = (username) => {
  const sql = {
    text: 'SELECT  user_name FROM "user" WHERE user_name = $1;',
    values: [username],
  };
  return connection.query(sql);
};

exports.insert = (username, hashed, email, parentId) => {
  const sql = {
    text: `
     with new_insert as (
          insert
              into
                  "user" (user_name ,
                  password,
                  email )
              values ( $1 ,
              $2 ,
              $3 ) returning id )
          insert
              into
              parent (parent_id,
              user_id)
          values ( $4,
          (
          select
              id
          from
              new_insert) );
          `,
    values: [username, hashed, email, parentId],
  };
  return connection.query(sql);
};

exports.select = (email) => {
  const sql = {
    text: `SELECT email, user_name , parent.parent_id  
    FROM "user"  
    INNER join parent on "user".id = parent.user_id where "user".email = $1`,
    values: [email],
  };
  return connection.query(sql);
};
