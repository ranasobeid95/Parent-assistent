const { onFinish } = require('tape');

// require('./routes/index.test');
require('./quieres/index.test');

onFinish(() => process.exit(0));
