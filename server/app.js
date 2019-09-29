const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./router');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());

app.set('port', PORT);
app.use(express.json());
// no need for this line since we don't use form in our app
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

module.exports = app;
