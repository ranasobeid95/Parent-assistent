
const express = require('express');
const {
  logout, classActivities, login, signupParent,
} = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/signup/parent', signupParent);
router.post('/login', login);
router.use(auth);
router.get('/subjects/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);

module.exports = router;
