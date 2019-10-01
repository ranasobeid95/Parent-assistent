
const express = require('express');
<<<<<<< HEAD
const { logout, homeworks } = require('../controllers');
=======
const { logout, login } = require('../controllers');

>>>>>>> 8c86d774f939ef2cdb0877c20014dc5d7bc1ad8b
const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/login', login);
router.use(auth);
router.get('/subject/:subjectId/homeworks/:classId', homeworks);
router.get('/logout', logout);

module.exports = router;
