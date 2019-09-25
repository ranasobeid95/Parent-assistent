import React from 'react';
import Button from '../../common/Button';

import('./index.css');

const Subject = ({ subject = 'Arabic' }) => {
  return (
    <div className="subject">
      <p className="subject__p--subject">{subject}</p>
      <p className="subject__p--des">
        you will find a complete description of the class
      </p>
      <Button className="subject__btn" value="Class Activities"></Button>
      <Button className="subject__btn" value="Class Homeworks"></Button>
    </div>
  );
};

export default Subject;
