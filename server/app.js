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
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

module.exports = app;
