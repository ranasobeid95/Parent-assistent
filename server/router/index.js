const express = require('express');
const { logout, signupParent } = require('../controllers');

console.log(signupParent);

const router = express.Router();

router.get('/logout', logout);
router.post('/api/v1/signup/parent', signupParent);
module.exports = router;
