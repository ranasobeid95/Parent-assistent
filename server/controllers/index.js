const { login } = require('./routes/login');
const { teacherProfile } = require('./routes/teacherProfile');
const { logout } = require('./routes/logout');
const { signupParent } = require('./routes/signupParent');
const { classActivities } = require('./routes/activities');
const { homeworks } = require('./routes/homeworks');

module.exports = {
  logout,
  login,
  teacherProfile,
  signupParent,
  classActivities,
  homeworks,
};
