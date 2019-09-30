const express = require('express');
const { logout, signupParent } = require('../controllers');
const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.use(auth);
router.get('/logout', logout);
router.post('/signup/parent', signupParent);

module.exports = router;
