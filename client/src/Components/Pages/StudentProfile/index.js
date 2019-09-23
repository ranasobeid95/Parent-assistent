import React from 'react';
import TeacherTable from '../../CommonComponent/TeacherTable';
import './index.css';

const StudentProfile = () => {
  return (
    <div className="schoolName">
      <p className="schoolName__tiltle">Gaza Primary School</p>
      <TeacherTable />
    </div>
  );
};

export default StudentProfile;
