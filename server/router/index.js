const express = require('express');
const {
  logout, classActivities, homeworks, login,
} = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/login', login);
router.use(auth);
router.post('/subjects/:subjectId/homeworks/:classId', homeworks);
router.get('/subjects/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);

module.exports = router;
