const tape = require('tape');

// require('./routes/index.test');
require('./quieres/index.test');

tape.onFinish(() => process.exit(0));
