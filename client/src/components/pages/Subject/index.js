import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

import('./index.css');

const Subject = ({ subject = 'Arabic', CalssId, homeworkId, activityId }) => {
  return (
    <div className="subject">
      <div className="subject__title-box">
        <p className="subject__p--subject">{subject}</p>
        <p className="subject__p--des">
          you will find a complete description of the class
        </p>
      </div>
      <div className="subject__link">
        <Link
          className="subject__link--activities"
          to={`${subject}/${activityId}/${CalssId}`}
        >
          <Button className="subject__btn" value="Class Activities"></Button>
        </Link>

        <Link
          className="subject__link--homework"
          to={`${subject}/${homeworkId}/${CalssId}`}
        >
          <Button className="subject__btn" value="Class Homeworks"></Button>
        </Link>
      </div>
    </div>
  );
};

export default Subject;
