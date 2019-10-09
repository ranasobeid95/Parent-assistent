const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { loginSchema } = require('../utils/loginSchema');
const { loginData } = require('../../database/quieres/login');

const secret = process.env.SECRET_KEY;

const login = (req, res, next) => {
  const { email, password } = req.body;
  loginSchema
    .isValid(req.body)
    .then((valid) => {
      if (!valid) {
        const validationErr = new Error('Please, Check the data you entered');
        validationErr.statusCode = 400;
        throw validationErr;
      }
      return loginData(email);
    })
    .then(({ rows }) => {
      if (rows && rows.length === 0) {
        const validationErr = new Error('you are not/sign up');
        validationErr.statusCode = 400;
        throw validationErr;
      }
      const { password: hashedPassword, parent_id: parentId, id } = rows[0];
      return bcrypt.compare(password, hashedPassword).then((value) => ({
        value,
        parentId,
        id,
      }));
    })
    .then(({ value, parentId, id }) => {
      if (value) {
        const accessToken = jwt.sign(
          { parentid: parentId, id, name: 'parent-assistent' },
          secret,
        );
        res.cookie('access', accessToken, { httpOnly: true });
        res.json({ message: id });
      } else {
        const validationErr = new Error('wrong password');
        validationErr.statusCode = 400;
        throw validationErr;
      }
    })
    .catch((err) => {
      const { statusCode } = err;
      switch (statusCode) {
        case 400:
          res
            .status(400)
            .json({ error: 'wrong user name or password', statusCode: 400 });
          break;
        default:
          next(err);
      }
    });
};

module.exports = { login };
