const express = require('express');
const { logout, signupParent } = require('../controllers');
const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/signup/parent', signupParent);
router.use(auth);
router.get('/logout', logout);

module.exports = router;
