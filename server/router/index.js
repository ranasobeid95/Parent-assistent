const express = require('express');
const { logout } = require('../controllers');
const { login } = require('../controllers');

const router = express.Router();

router.post('/api/v1/login', login);
router.get('/logout', logout);
module.exports = router;
