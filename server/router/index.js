const express = require('express');
const { logout } = require('../controllers');
const { parentPRofile } = require('../controllers');

const router = express.Router();

router.get('/parent/profile', parentPRofile);
router.get('/logout', logout);
module.exports = router;
