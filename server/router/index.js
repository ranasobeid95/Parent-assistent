
const express = require('express');
const { logout, login } = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/login', login);
router.use(auth);
router.get('/logout', logout);

module.exports = router;
