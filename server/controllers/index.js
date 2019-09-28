const express = require('express');

const router = express.Router();
const { login } = require('./routes/login');

router.post('/parent-profiel', login);

module.exports = router;
