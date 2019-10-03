import React from 'react';
import StudentTable from '../../common/StudentTable';
import './index.css';

const ParentProfile = props => {
  return (
    <div className="schoolName">
      <p className="schoolName__tiltle">Gaza Primary School</p>
      <StudentTable {...props} />
    </div>
  );
};
export default ParentProfile;
