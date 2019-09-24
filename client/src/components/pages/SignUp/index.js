import React from 'react';
import Button from '../../common/Button';
import './index.css';

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup__content">
        <Button
          value="As a Teacher"
          className="button-input button-input__teacher"
        />
        <Button value="As a Parent" className="button-input" />
      </div>
    </div>
  );
};

export default Signup;
