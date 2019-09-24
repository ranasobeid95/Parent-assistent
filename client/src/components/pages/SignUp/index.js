import React from 'react';
import Button from '../../common/Button';
import './index.css';

const Signup = () => {
  const data = ['As a Teacher', 'As a Parent'];
  return (
    <div className="wrapper-singup">
      <div className="signup">
        {data.map((el, index) =>
          index === 0 ? (
            <Button value={el} className="button-input button-input__teacher" />
          ) : (
            <Button value={el} className="button-input" />
          )
        )}
      </div>
    </div>
  );
};

export default Signup;
