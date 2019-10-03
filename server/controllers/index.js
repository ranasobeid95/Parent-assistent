const { login } = require('./routes/login');
const { teacherProfile } = require('./routes/teacherProfile');
const { logout } = require('./routes/logout');
const { parentPRofile } = require('./routes/parentProfile');
const { signupParent } = require('./routes/signupParent');
const { classActivities } = require('./routes/activities');
const { homeworks } = require('./routes/homeworks');
const { subjectPage } = require('./routes/subjectPage');
const { clientError } = require('./error/clientError');
const { serverError } = require('./error/serverError');
const { authUser } = require('./routes/auth');

module.exports = {
  logout,
  login,
  teacherProfile,
  parentPRofile,
  signupParent,
  classActivities,
  homeworks,
  subjectPage,
  clientError,
  serverError,
  authUser,
};
