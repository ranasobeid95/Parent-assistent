import * as yup from 'yup';

const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!')
    .trim('space is invalid'),
  username: yup
    .string()
    .required()
    .trim('space is invalid'),
  parentId: yup
    .string()
    .length(10)
    .required()
    .trim('space is invalid'),
  password: yup
    .string()
    .min(8, 'Password has to be longer than 6 characters!')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.')
    .required('Password is required!'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required!'),
});

export default signUpValidation;
