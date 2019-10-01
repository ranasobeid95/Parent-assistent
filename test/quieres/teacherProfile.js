const tape = require('tape');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');
const {
  getTeacherProfile,
} = require('../../server/database/quieres/teacherProfile');

tape('testing for teacherProfile qyuery', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => getTeacherProfile(1))
    .then((res) => {
      t.deepEqual(res.rows[0].first_name, 'Ahmed', 'should be the same');
      t.deepEqual(res.rows[0].last_name, 'Ghareb', 'should be the same');

      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

tape.onFinish(() => process.exit(0));
