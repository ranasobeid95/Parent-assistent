const express = require('express');
const { logout, classActivities } = require('../controllers');

const router = express.Router();

router.get('/subject/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);
module.exports = router;
