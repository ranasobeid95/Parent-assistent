const jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY;

const authUser = (req, res) => {
  jwt.verify(req.cookies.access, secret, (err, token) => {
    console.log(token);
    if (err) {
      res.status(401).send({ auth: false });
    } else {
      res.json({ auth: true, id: token.id });
    }
  });
};

module.exports = { authUser };
