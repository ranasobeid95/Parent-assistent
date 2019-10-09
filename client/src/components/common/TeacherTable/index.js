import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import './index.css';

export default class TeacherTable extends React.Component {
  state = { data: [] };

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history,
    } = this.props;

    axios
      .get(`/api/v1/student/${id}`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        if (err) {
          history.push('/serverError');
        }
      });
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
              {data.map(
                ({
                  first_name: firstName,
                  last_name: lastName,
                  subject_name: subjectName,
                  user_id: id,
                  subject_id: subjectId,
                  class: classId,
                }) => (
                  <tr key={id}>
                    <td className="studentTable__content1">
                      {`${firstName} ${lastName}`}
                      <p>
                        <Link
                          to={`/profile/teacher/${id}`}
                          className="studentTable__link"
                        >
                          view profile
                        </Link>
                      </p>
                    </td>
                    <td className="studentTable__content2">
                      {subjectName}
                      <p>
                        <Link
                          to={{
                            pathname: `/student/subject/${subjectId}/${classId}`,
                            state: {
                              subjectName,
                            },
                          }}
                          className="studentTable__link"
                        >
                          view subject
                        </Link>
                      </p>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
TeacherTable.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};
