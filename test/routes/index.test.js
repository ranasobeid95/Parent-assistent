const test = require('tape');
require('./logout.test');

exports.initalTest = test('initals test', (t) => {
  t.equal(2, 2, 'should be equal');
  t.end();
});
