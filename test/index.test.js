const tape = require('tape');

require('./quieres/index.test');
require('./routes/index.test');

tape.onFinish(() => process.exit(0));
