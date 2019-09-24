/* eslint-disable import/prefer-default-export */
import * as yup from 'yup'; // for everything

const singUpValidation = () => {
  return yup.object().shape({
    email: yup.string().email(),
    password: yup.string().min(8),
  });
};

export { singUpValidation };
