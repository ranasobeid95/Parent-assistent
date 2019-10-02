const yup = require('yup');

const schema = yup.object().shape({
  email: yup.string().required(),
  username: yup
    .string()
    .min(3)
    .required(),
  parentId: yup
    .string()
    .min(6)
    .required(),
  password: yup
    .string()
    .matches(/[a-zA-Z0-9]/)
    .min(6)
    .required(),
});

exports.signupValidate = (email, username, parentId, password) => schema.isValid({
  email, username, parentId, password,
});
