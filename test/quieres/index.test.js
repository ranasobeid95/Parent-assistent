const test = require('tape');
const getTeacherProfile = require('./teacherProfile');

exports.initalTest = test('initals test', (t) => {
  t.equal(2, 2, 'should be equal');
  t.end();
});

module.exports = { getTeacherProfile };
