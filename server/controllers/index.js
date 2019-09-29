const express = require('express');

const router = express.Router();
const { login } = require('./routes/login');

router.post('/api/v1/login', login);

module.exports = router;
