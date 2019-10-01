const tape = require('tape');
const { dbBuild, dbFakeData } = require('../../server/database/config/build');
const { getClassActivities } = require('../../server/database/quieres/getClassActivities');


tape('Testing for query: GetClassActivities', (t) => {
  dbBuild()
    .then(() => dbFakeData())
    .then(() => getClassActivities(1, 1))
    .then((result) => {
      const actual = Object.keys(result.rows[0]);
      const expected = ['id', 'activity_date', 'class', 'description', 'title', 'subject_id'];
      t.deepEqual(actual, expected, 'Testing for query Avtivities Passing');
      t.end();
    })
    .catch(t.error);
});
