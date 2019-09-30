const test = require('tape');
const getParentProfile = require('./parentProfile');

exports.initalTest = test('initals test', (t) => {
  t.equal(2, 2, 'should be equal');
  t.end();
});

module.exports = { getParentProfile };
