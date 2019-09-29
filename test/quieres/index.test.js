const test = require('tape');
const getLoginData = require('./login');
exports.initalTest = test('initals test', t => {
  t.equal(2, 2, 'should be equal');
  t.end();
});
