const express = require('express');
const { logout, signupParent } = require('../controllers');

const router = express.Router();

router.get('/logout', logout);
router.post('/signup/parent', signupParent);
module.exports = router;
