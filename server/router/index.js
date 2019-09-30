const express = require('express');
const { logout, homeworks } = require('../controllers');
const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.use(auth);
router.get('/subject/:subjectId/homeworks/:classId', homeworks);
router.get('/logout', logout);

module.exports = router;
