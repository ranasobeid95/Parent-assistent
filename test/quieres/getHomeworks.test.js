const tape = require('tape');
const { dbFakeData, dbBuild } = require('../../server/database/config/build');
const { getClassHomeworks } = require('../../server/database/quieres/getClassHomeworks');

tape('test for getHomeworks query', (t) => {
  const newDate = '10-2-2019';
  dbBuild()
    .then(dbFakeData)
    .then(() => getClassHomeworks(1, 1, newDate))
    .then((res) => {
      const actual = res.rows[0];
      const expected = { homework_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', urls: { resource1: 'https://www.github.com', resource2: 'https://www.github.com' } };
      t.deepEqual(actual, expected, 'should be the same');
      t.end();
    })
    .catch((err) => {
      t.error(err);
      t.end();
    });
});

tape.onFinish(() => process.exit(0));
