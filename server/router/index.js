const express = require('express');
const { logout } = require('../controllers');
const { login } = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.use(auth);
router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
