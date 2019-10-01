const tape = require('tape');
const {
  findUser,
  select,
  insert,
} = require('../../server/database/quieres/index').signUp;

const { dbBuild, dbFakeData } = require('../../server/database/config/build');

tape('test the findUser & insert query', (t) => {
  const expected = {
    user_name: 'Mohammed',
  };
  dbBuild().then(dbFakeData)
    .then(() => insert('Mohammed', '123456789', 'Mhmmase@gmail.com', '123456789'))
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
  const expected = {
    email: 'Ola200@gmail.com',
    user_name: 'Ola',
    parent_id: 123456789,
  };

  dbBuild()
    .then(dbFakeData)
    .then(() => select(expected.email))
    .then((res) => {
      t.deepEqual(
        res.rows[0],
        expected,
        'select test to retrive data based on data from insert query ',
      );
      t.end();
    });
});
