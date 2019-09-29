const express = require('express');
const { logout } = require('../controllers');
const { auth } = require('../controllers/middlewares/index');

const router = express.Router();

router.use(auth);
router.get('/logout', logout);

module.exports = router;
