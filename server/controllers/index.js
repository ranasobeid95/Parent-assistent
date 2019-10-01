const { logout } = require('./routes/logout');
const { login } = require('./routes/login');
const { homeworks } = require('./routes/homeworks');
const classActivities = require('./routes/activities');

module.exports = {
  logout,
  login,
  homeworks,
  classActivities,
};
