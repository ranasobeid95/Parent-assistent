const { login } = require('./routes/login');
const { teacherProfile } = require('./routes/teacherProfile');
const { logout } = require('./routes/logout');
const { parentPRofile } = require('./routes/parentProfile');
const { signupParent } = require('./routes/signupParent');
const { classActivities } = require('./routes/activities');
const { homeworks } = require('./routes/homeworks');
const { subjectPage } = require('./routes/subjectPage');

module.exports = {
  logout,
  login,
  teacherProfile,
  parentPRofile,
  signupParent,
  classActivities,
  homeworks,
  subjectPage,
};
