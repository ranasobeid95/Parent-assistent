import * as yup from 'yup';

const signUpValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  userName: yup.string().required(),
  parentId: yup.number().required(),
  password: yup
    .string()
    .min(8)
    .required(),
});

export default signUpValidation;
