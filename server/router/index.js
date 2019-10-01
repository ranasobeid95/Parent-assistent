
const express = require('express');
const { auth } = require('../controllers/middlewares');
const { logout, login, teacherProfile } = require('../controllers');

const router = express.Router();

router.post('/login', login);
router.use(auth);
router.get('/profile/teacher', teacherProfile);
router.get('/logout', logout);

module.exports = router;
