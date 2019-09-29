const tape = require('tape');
const { dbFakeData } = require('../../server/database/config/build');
const getData = require('../../server/database/quieres/login');

const getLoginData = tape('testing for get data from database', t => {
  dbFakeData();
  getData().then(res => {
    t.deepEqual(res.rows[0].email, 'Sajeda', 'the name should be sajeda');
    t.end();
  });
});

tape.onFinish(() => process.exit(0));

module.exports = getLoginData;
