const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().required(),
  username: yup
    .string()
    .min(3)
    .required(),
  parentId: yup
    .number()
    .integer()
    .required(),
  password: yup
    .string()
    .matches(/[a-zA-Z0-9]/)
    .min(9)
    .required(),
});

exports.signupValidate = (email, username, parentId, password) => schema.isValid({
  email, username, parentId, password,
});
