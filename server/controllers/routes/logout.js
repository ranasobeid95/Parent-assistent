const logout = (req, res) => {
  res.clearCookie('access');
  res.send({ statusCode: 200, message: 'logged out successfully' });
};

module.exports = { logout };
