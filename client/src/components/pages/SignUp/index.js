import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../common/Button';
import './index.css';

const Signup = ({ onBlurFun }) => {
  return (
    <div className="signup" role="button" tabIndex={0} onClick={onBlurFun}>
      <div className="signup__content">
        <Button value="As a Teacher" className="button-input__teacher" />
        <Link to="/signup/parent" style={{ textDecoration: 'none' }}>
          <Button value="As a Parent" className="button-input__parent" />
        </Link>
      </div>
    </div>
  );
};
Signup.propTypes = {
  onBlurFun: PropTypes.func.isRequired,
};

export default Signup;
