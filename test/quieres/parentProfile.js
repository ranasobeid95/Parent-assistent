const tape = require('tape');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');
const {
  getParentProfile,
} = require('../../server/database/quieres/parentProfile');

tape('testing for getParentProfile qyuery', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => getParentProfile(1))
    .then((res) => {
      t.deepEqual(res.rows[0].student_name, 'Sami', 'should be the same');
      t.deepEqual(res.rows[0].class, 1, 'should be 1');

      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

tape.onFinish(() => process.exit(0));
