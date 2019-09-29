const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  jwt.verify(req.cookies.access, process.env.secret, (err, token) => {
    if (err) {
      res.status(401).send({ statusCode: 401, error: 'Un Authorized' });
    } else {
      req.user = { parentid: token.parentid, name: token.name };
      next();
    }
  });
};

module.exports = { auth };
