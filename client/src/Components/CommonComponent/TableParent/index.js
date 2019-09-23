import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import data from './data';
import './index.css';

const Table = (data, id) => {
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
        {data.map(e => {
          return (
            <tr>
              <Router>
                <td className="parentTable__content1">{e.name}</td>
                <td className="parentTable__content2">{e.grade}</td>
                <td className="parentTable__content2">
                  {e.class}
                  <p>
                    <Link
                      to={`/student/:id${id}`}
                      className="parentTable__link"
                    >
                      view subject
                    </Link>
                  </p>
                </td>
              </Router>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
