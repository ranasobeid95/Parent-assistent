const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().required(),
  username: yup
    .string()
    .min(3)
    .required(),
  parentId: yup
    .string()
    .trim()
    .required(),
  password: yup
    .string()
    .trim()
    .matches(/[a-zA-Z0-9]/)
    .min(9)
    .required(),
});

exports.signupValidate = (email, username, parentId, password) => schema.isValid({
  email, username, parentId, password,
});
