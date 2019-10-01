const { logout } = require('./routes/logout');
const { login } = require('./routes/login');
const { parentPRofile } = require('./routes/parentProfile');
const { signupParent } = require('./routes/signupParent');
const { classActivities } = require('./routes/activities');
const { homeworks } = require('./routes/homeworks');

module.exports = {
  logout,
  login,
  parentPRofile,
  signupParent,
  classActivities,
  homeworks,
};
