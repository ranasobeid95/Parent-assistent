const { join } = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
require('env2')('./config.env');
const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());

app.set('port', PORT);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
