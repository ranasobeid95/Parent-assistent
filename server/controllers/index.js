const express = require('express');
const { signupParent } = require('./routes/signupParent');

const router = express.Router();
router.post('/api/v1/signup/parent', signupParent);

module.exports = router;
