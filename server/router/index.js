const express = require('express');
const { logout, classActivities } = require('../controllers');
const { auth } = require('../controllers/middlewares');

const router = express.Router();


router.use(auth);
router.get('/subjects/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);

module.exports = router;
