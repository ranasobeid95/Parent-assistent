const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('env2')('./secret.env');
const { loginData } = require('../../database/quieres/login');

const secret = process.env.SECRET_KEY;

const login = (req, res, next) => {
  const { email, password } = req.body;
  loginData(email)
    .then((result) => {
      if (result.rows.length === 0) res.send('not signed up');
      const hashedPassword = result.rows[0].password;
      const id = result.rows[0].parent_id;
      bcrypt.compare(password, hashedPassword, (err, value) => {
        if (value) {
          const accessToken = jwt.sign(
            { id: 1, name: 'parent-assistent' },
            secret,
          );
          res.cookie('access', accessToken);
          res.redirect(`profile/parent/:${id}`);
        } else {
          res.send('Wrong Password');
        }
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  login,
};
