const { auth } = require('./auth');

const { parentPRofile } = require('../routes/parentProfile');
const { classActivities } = require('../routes/activities');
const { homeworks } = require('../routes/homeworks');

module.exports = {
  auth,
  parentPRofile,
  classActivities,
  homeworks,
};
