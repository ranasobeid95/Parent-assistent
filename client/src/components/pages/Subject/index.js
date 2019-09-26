import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

import('./index.css');

const Subject = ({ subject, CalssId, homeworkId, activityId }) => {
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

Subject.propTypes = {
  subject: PropTypes.string,
  CalssId: PropTypes.number.isRequired,
  homeworkId: PropTypes.number.isRequired,
  activityId: PropTypes.number.isRequired,
};

Subject.defaultProps = {
  subject: 'Arabic',
};

export default Subject;
