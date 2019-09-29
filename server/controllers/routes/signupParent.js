const { hash } = require('bcrypt');
const { findUser, insert, select } = require('../../database/quieres/singup');

const { signupValidate } = require('../utils/singupParentSchema ');

const signupParent = (req, res, next) => {
  const {
    email, username, parentId, password,
  } = req.body;

  signupValidate(email, username, parentId, password)
    .then((foundUser) => {
      if (!foundUser) throw Error('validation error');
    })
    .then(() => findUser(username))
    .then((user) => {
      if (user.rows.length !== 0) throw Error('username exists');
    })
    .then(() => hash(password, 10))
    .then((hashed) => {
      insert(username, hashed, email, parentId);
    })
    .then(() => select())
    .then((data) => data.rows[0])
    .then((response) => {
      res.status(200).send({ ...response });
    })

    .catch((err) => {
      switch (err.message) {
        case 'username exists':
          res.status(406).send({ error: 'username exists' });
          break;
        case 'validation error':
          res.status(409).send({ error: 'validation error' });
          break;
        default:
          next(err);
          break;
      }
    });
};

module.exports = signupParent;
