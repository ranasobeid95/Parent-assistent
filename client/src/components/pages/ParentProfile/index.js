import React from 'react';
import StudentTable from '../../common/StudentTable';
import './index.css';

const ParentProfile = () => {
  return (
    <div className="schoolName">
      <p className="schoolName__tiltle">Gaza Primary School</p>
      <StudentTable />
    </div>
  );
};
export default ParentProfile;
