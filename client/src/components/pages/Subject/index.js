import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

import('./index.css');
const Subject = props => {
  console.log(props);
  return (
    <div className="subject">
      <div className="subject__title-box">
        <p className="subject__p--subject"></p>
        <p className="subject__p--des">
          you will find a complete description of the class
        </p>
      </div>
      <div className="subject__link">
        <Link
          className="subject__link--activities"
          to={`/students/${props.match.params.idsubject}/activites/${props.match.params.class}`}
        >
          <Button className="subject__btn" value="Class Activities"></Button>
        </Link>

        <Link
          className="subject__link--homework"
          to={`/student/${props.match.params.idsubject}/homework/${props.match.params.class}`}
        >
          <Button className="subject__btn" value="Class Homeworks"></Button>
        </Link>
      </div>
    </div>
  );
};

Subject.propTypes = {
  subject: PropTypes.string.isRequired,
  CalssId: PropTypes.number.isRequired,
  homeworkId: PropTypes.number.isRequired,
  subject_id: PropTypes.number.isRequired,
};

export default Subject;
