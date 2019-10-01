const { login } = require('./routes/login');
const { teacherProfile } = require('./routes/teacherProfile');
const { logout } = require('./routes/logout');

module.exports = {
  logout,
  login,
  teacherProfile,
};
