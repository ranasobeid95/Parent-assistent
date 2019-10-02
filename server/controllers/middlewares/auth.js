const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const auth = (req, res, next) => {
  console.log(req.cookies);
  jwt.verify(req.cookies.access, secret, (err, token) => {
    const { parentid, id, name } = token;
    if (err) {
      res.status(401).send({ statusCode: 401, error: 'Un Authorized' });
    } else {
      req.user = { parentid, id, name };
      next();
    }
  });
};

module.exports = { auth };
