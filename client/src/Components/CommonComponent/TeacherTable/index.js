import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const TeacherTable = data => {
  return (
    <table className="studentTable">
      <thead className="studentTable__title">
        <tr>
          <th className="studentTable__title1">Teacher Name</th>
          <th className="studentTable__title2">Subject</th>
        </tr>
      </thead>
      <tbody className="studentTable__content">
        {data.map(({ teacherName, subject, id }) => (
          <tr>
            <td className="studentTable__content1">
              {teacherName}
              <p>
                <Link
                  to={`/profile/teacher/:${id}`}
                  className="studentTable__link"
                >
                  view profile
                </Link>
              </p>
            </td>
            <td className="studentTable__content2">
              {subject}
              <p>
                <Link
                  to={`/student/:subject/:${id}`}
                  className="studentTable__link"
                >
                  view subject
                </Link>
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TeacherTable;
