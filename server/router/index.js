const express = require('express');
const { logout } = require('../controllers');
const { parentPRofile } = require('../controllers/index');

const router = express.Router();

const { auth } = require('../controllers/middlewares');

router.get('/profile/parent', parentPRofile);
router.use(auth);
router.get('/logout', logout);

module.exports = router;
