import React from 'react';
import PropTypes from 'prop-types';
import TeacherTable from '../../common/TeacherTable';
import './index.css';

const StudentProfile = props => {
  const { onBlurFun } = props;
  return (
    <div className="schoolName" role="button" tabIndex={0} onClick={onBlurFun}>
      <p className="schoolName__tiltle">Gaza Primary School</p>
      <TeacherTable {...props} />
    </div>
  );
};
StudentProfile.propTypes = {
  onBlurFun: PropTypes.func.isRequired,
};

export default StudentProfile;
