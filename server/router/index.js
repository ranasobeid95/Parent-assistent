const express = require('express');
const {
  subjectPage,
  logout,
  classActivities,
  homeworks,
  login,
  signupParent,
  teacherProfile,
  parentPRofile,
  clientError,
  serverError,
  authUser,
} = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/signup/parent', signupParent);
router.post('/login', login);
router.get('/auth', authUser);
router.use(auth);
router.get('/student/:id', subjectPage);
router.get('/profile/teacher/:id', teacherProfile);
router.get('/profile/parent/:id', parentPRofile);
router.post('/subjects/:subjectId/homeworks/:classId', homeworks);
router.get('/subjects/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);

router.use(clientError);
router.use(serverError);

module.exports = router;
