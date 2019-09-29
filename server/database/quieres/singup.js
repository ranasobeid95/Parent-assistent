const connection = require('../config/connection');

exports.findUser = (username) => {
  const sql = {
    text: 'SELECT * FROM "user" WHERE user_name = $1;',
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

exports.select = () => {
  const sql = {
    text: ` SELECT email, password , user_name , parent.parent_id 
  FROM "user"  
  INNER join parent on "user".id = parent.user_id    
  `,
  };
  return connection.query(sql);
};
