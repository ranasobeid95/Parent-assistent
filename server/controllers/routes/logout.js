module.exports = (req, res) => {
  res.clearCookie('access');
  res.send({ statusCode: 200, message: 'logged out successfully' });
};
