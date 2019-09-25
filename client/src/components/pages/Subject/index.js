import React from 'react';
import Button from '../../common/Button';

import('./index.css');

const Subject = ({ subject = 'Arabic' }) => {
  return (
    <React.Fragment>
      <div className="Student__div">
        <p className="subject__p">{subject}</p>
        <p className="subject__des">
          you will find a complete description of the class
        </p>
        <Button className="subject__btn" value="Class Activities"></Button>
        <Button className="subject__btn" value="Class Homeworks"></Button>
      </div>
    </React.Fragment>
  );
};

export default Subject;
