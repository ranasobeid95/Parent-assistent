import * as yup from 'yup';

const singUpValidation = () => {
  return yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(8),
  });
};

export default singUpValidation;
