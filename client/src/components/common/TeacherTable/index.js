import React from 'react';
import { Link } from 'react-router-dom';
// import data from './data';
import './index.css';

export default class TeacherTable extends React.Component {
  state = { data: [] };

  componentDidMount() {
    // we will make a request to fetch data by using (Axios)
  }

  render() {
    const { data } = this.state;
    return (
      <>
        {!data ? (
          <h1>loading...</h1>
        ) : (
          <table className="studentTable">
            <thead className="studentTable__title">
              <tr>
                <th className="studentTable__title1">Teacher Name</th>
                <th className="studentTable__title2">Subject</th>
              </tr>
            </thead>
            <tbody className="studentTable__content">
              {data.map(({ teacherName, subject, id }) => (
                <tr key={id}>
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
        )}
      </>
    );
  }
}
