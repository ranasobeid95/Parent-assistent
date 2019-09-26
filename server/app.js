const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
const router = require('./controllers/index');

app.set('port', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
