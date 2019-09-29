const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const loginSchema = require('../utils/loginSchema');
require('env2')('./config.env');
const { loginData } = require('../../database/quieres/login');

const secret = process.env.SECRET_KEY;

const login = (req, res, next) => {
  const { email, password } = req.body;

  loginSchema
    .validate(req.body)
    .then((valid) => {
      if (!valid) {
        const validationErr = new Error('Please, Check the data you entered');
        validationErr.statusCode = 400;
        throw validationErr;
      }
      return loginData(email);
    })
    .then((result) => {
      if (result.rows.length === 0) {
        const validationErr = new Error('you are not/sign up');
        validationErr.statusCode = 400;
        throw validationErr;
      }
      const hashedPassword = result.rows[0].password;
      const id = result.rows[0].parent_id;
      return bcrypt.compare(password, hashedPassword).then((value) => {
        if (value) {
          const accessToken = jwt.sign(
            { parentid: id, name: 'parent-assistent' },
            secret,
          );
          res.cookie('access', accessToken);
          res.redirect(`/api/v1/profile/parent/:${id}`);
        } else {
          const validationErr = new Error('wrong password');
          validationErr.statusCode = 400;
          throw validationErr;
        }
      });
    })
    .catch((err) => {
      const { statusCode } = err;
      switch (statusCode) {
        case 400:
          res.status(400).send({ error: err.message, statusCode: 400 });
          break;
        default:
          next(err);
      }
    });
};

module.exports = {
  login,
};
