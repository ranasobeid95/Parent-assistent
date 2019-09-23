import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const StudentTable = data => {
  return (
    <table className="parentTable">
      <thead className="parentTable__title">
        <tr>
          <th className="parentTable__title1">Name</th>
          <th>Grade</th>
          <th className="parentTable__title2">Class</th>
        </tr>
      </thead>
      <tbody className="parentTable__content">
        {data.map(({ name, grade, StudentClass, id }) => {
          return (
            <tr>
              <td className="parentTable__content1">{name}</td>
              <td className="parentTable__content2">{grade}</td>
              <td className="parentTable__content2">
                {StudentClass}
                <p>
                  <Link to={`/student/:${id}`} className="parentTable__link">
                    view profile
                  </Link>
                </p>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default StudentTable;
