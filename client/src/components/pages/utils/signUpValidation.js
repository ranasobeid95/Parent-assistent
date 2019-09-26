import * as yup from 'yup';

const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  userName: yup.string().required(),
  parentId: yup
    .string()
    .length(10)
    .required(),
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
