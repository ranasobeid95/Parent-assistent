const { logout } = require('./routes/logout');
const { login } = require('./routes/login');
const classActivities = require('./routes/activities');

module.exports = {
  logout,
  login,
  classActivities,
};
