const express = require('express');
const { logout } = require('../controllers');
const { parentPRofile } = require('../controllers');

const router = express.Router();

const { auth } = require('../controllers/middlewares');

router.get('/parent/profile', parentPRofile);
router.use(auth);
router.get('/logout', logout);

module.exports = router;
