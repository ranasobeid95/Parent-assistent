const { join } = require('path');
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
require('env2')('./config.env');
const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());

app.set('port', PORT);
app.use(express.json());

app.use('/api/v1', router);
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
