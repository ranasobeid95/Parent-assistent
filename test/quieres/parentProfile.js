const tape = require('tape');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');
const {
  getParentProfile,
} = require('../../server/database/quieres/parentProfile');

tape('testing for getParentProfile qyuery', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => getParentProfile())
    .then((res) => {
      t.deepEqual(res.rows[0].student_name, 'Sami', 'should be the same');
      t.deepEqual(res.rows[0].class, 5, 'should be 5');

      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

tape.onFinish(() => process.exit(0));
