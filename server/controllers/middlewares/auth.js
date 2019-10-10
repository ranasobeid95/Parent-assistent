const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  jwt.verify(req.cookies.access, secret, (err, token) => {
    if (err) {
      res.status(401).send({ statusCode: 401, error: 'Un Authorized' });
    } else {
      const { parentid, id, name } = token;
      req.user = { parentid, id, name };
      next();
    }
  });
};

module.exports = { auth };
