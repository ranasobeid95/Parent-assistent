// require('./quieres/index.test');
require('./routes/index.test');
const test = require('tape');

exports.initalTest = test('index inital test', (t) => {
  t.equal(2, 2, 'should be equal');
  t.end();
});
