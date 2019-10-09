import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../../common/Button';

import('./index.css');
const Subject = props => {
  const {
    match: {
      params: { subjectId, idClass },
    },
    location,
    onBlurFun,
  } = props;
  return (
    <div className="subject" role="button" tabIndex={0} onClick={onBlurFun}>
      <div className="subject__title-box">
        <p className="subject__p--subject">{location.state.subjectName}</p>
        <p className="subject__p--des">
          you will find a complete description of the class
        </p>
      </div>
      <div className="subject__link">
        <Link
          className="subject__link--activities"
          to={`/students/${subjectId}/activites/${idClass}`}
        >
          <Button className="subject__btn" value="Class Activities"></Button>
        </Link>

        <Link
          className="subject__link--homework"
          to={`/student/${subjectId}/homework/${idClass}`}
        >
          <Button className="subject__btn" value="Class Homeworks"></Button>
        </Link>
      </div>
    </div>
  );
};

Subject.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      subjectId: PropTypes.any,
      idClass: PropTypes.any,
    }),
  }).isRequired,
  onBlurFun: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      subjectName: PropTypes.string,
    }),
  }).isRequired,
};

export default Subject;
