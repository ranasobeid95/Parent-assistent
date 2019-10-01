const { onFinish } = require('tape');
require('./quieres/index.test');
require('./routes/index.test');

onFinish(() => {
  process.exit(0);
});
