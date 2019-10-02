import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/signup/parent" style={{ textDecoration: 'none' }}>
          <Button value="As a Parent" className="button-input" />
        </Link>
      </div>
    </div>
  );
};

export default Signup;
