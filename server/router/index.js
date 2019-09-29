const express = require('express');
const { auth, logout } = require('../controllers');

const router = express.Router();

router.use(auth);
router.get('/logout', logout);

module.exports = router;
