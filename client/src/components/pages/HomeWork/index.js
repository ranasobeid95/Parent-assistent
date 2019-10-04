/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './index.css';

class Homework extends Component {
  state = {
    data: null,
  };

  handleOnchange = e => {
    // we will make a request to fetch data by using (Axios)
    const { value } = e.target;
    console.log(value);
    const {
      match: {
        params: { subjectId, classId },
      },
    } = this.props;
    axios
      .post(`/api/v1/subjects/${subjectId}/homeworks/${classId}`, {
        homeworkDate: value,
      })
      .then(result => {
        console.log(result);
        const AllHomeworks = result.data.data[0];
        this.setState({ data: AllHomeworks });
      });
  };

  render() {
    const { data } = this.state;

    return (
      <>
        <div className="homework">
          <h3 className="homework__class">Class Homework</h3>
          <div className="homework__calendar">
            <form>
              <div className="homework__select">select Date:</div>
              <input
                type="date"
                onChange={this.handleOnchange}
                name="date"
                className="homework__date"
              />
            </form>
          </div>
          {data ? (
            <>
              <div className="homework__box">
                <h3 className="homework__explaination">
                  Homework Explaination
                </h3>
                <p className="homework__text">{data.homework_description}</p>
              </div>
              <div className="homework__materials">
                <h3 className="homework__helping">Helping materials</h3>
                <div>
                  <ul className="homework__links">
                    {Object.entries(data.urls).map((resource, index) => (
                      <li key={index}>
                        <a href={resource} className="homework__resource-link">
                          Resource
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <h2>No home work, choose another date</h2>
          )}
        </div>
      </>
    );
  }
}

Homework.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      subjectId: PropTypes.any,
      classId: PropTypes.any,
    }),
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      subjectName: PropTypes.string,
    }),
  }).isRequired,
};

export default Homework;
