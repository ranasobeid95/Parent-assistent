const express = require('express');
const { logout } = require('../controllers');
const { auth } = require('../controllers/middlewares');
const { teacherProfile } = require('../controllers/index');

const router = express.Router();
router.use(auth);
router.get('/profile/teacher', teacherProfile);
router.get('/logout', logout);

module.exports = router;
