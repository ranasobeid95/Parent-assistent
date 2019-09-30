const tape = require('tape');
const {
  findUser,
  select,
  insert,
} = require('../../server/database/quieres/index').signUp;

const { dbBuild, dbFakeData } = require('../../server/database/config/build');

tape('test the findUser & insert query', (t) => {
  const expected = {
    id: 1,
    email: 'Ola200@gmail.com',
    user_name: 'Mohammed',
    password: '123456789',
  };
  dbBuild()
    .then(() => {
      insert('Mohammed', '123456789', 'Ola200@gmail.com', '123456789');
    })
    .then(() => findUser('Mohammed'))
    .then((res) => res.rows[0])
    .then((res) => {
      t.deepEqual(res, expected, 'test the retrived data form insert');
    })
    .then(t.end)
    .catch(t.error);
});

// the select gose here

tape('test the seletct query ', (t) => {
  const expected = [
    {
      email: 'Ola200@gmail.com',
      user_name: 'asmaa',
      parent_id: 123456789,
    },
    {
      email: 'Samah1990@gmail.com',
      user_name: 'asmaa',
      parent_id: 123456789,
    },
    {
      email: 'Ahmed54@gmail.com',
      user_name: 'asmaa',
      parent_id: 123456789,
    },
    {
      email: 'Kamal2120@gmail.com',
      user_name: 'asmaa',
      parent_id: 123456789,
    },
  ];

  dbBuild()
    .then(dbFakeData)
    .then(() => select())
    .then((res) => {
      t.deepEqual(res.rows, expected, 'select test');
      t.end();
    });
});
