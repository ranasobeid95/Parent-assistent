import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';

export default class studentTable extends React.Component {
  state = { data: [] };

  componentDidMount() {
    const {
      props: { id },
    } = this.props;
    axios.get(`/api/v1/profile/parent/${id}`).then(res => {
      this.setState({ data: res.data });
    });
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
              {data.map(
                ({
                  student_name: studenName,
                  class: className,
                  parent_id: id,
                }) => {
                  return (
                    <tr key={id}>
                      <td className="parentTable__content1">{studenName}</td>
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
                }
              )}
            </tbody>
          </table>
        )}
      </>
    );
  }
}

studentTable.propTypes = {
  props: PropTypes.objectOf(PropTypes.any).isRequired,
};
