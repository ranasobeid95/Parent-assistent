import React from 'react';
import { Link } from 'react-router-dom';
// import data from './data';
import './index.css';

export default class studentTable extends React.Component {
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
          <table className="parentTable">
            <thead className="parentTable__title">
              <tr>
                <th className="parentTable__title1">Name</th>
                <th>Grade</th>
                <th className="parentTable__title2">Class</th>
              </tr>
            </thead>
            <tbody className="parentTable__content">
              {data.map(({ name, grade, studentClass, id }) => {
                return (
                  <tr key={id}>
                    <td className="parentTable__content1">{name}</td>
                    <td>{grade}</td>
                    <td className="parentTable__content2">
                      {studentClass}
                      <p>
                        <Link
                          to={`/student/:${id}`}
                          className="parentTable__link"
                        >
                          view profile
                        </Link>
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    );
  }
}