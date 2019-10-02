import React from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './index.css';

export default class studentTable extends React.Component {
  state = { data: [] };

  componentDidMount() {
    // axios.get('api/v1/profile/parent/2').then(res => {
    //   console.log(res);
    //   this.setState({ data: res.data });
    // });
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
              {data.map(({ studentName, class: className }) => {
                return (
                  <tr key={1}>
                    <td className="parentTable__content1">{studentName}</td>
                    <td>{className}</td>
                    <td className="parentTable__content2">
                      <p>
                        <Link to="/" className="parentTable__link">
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
