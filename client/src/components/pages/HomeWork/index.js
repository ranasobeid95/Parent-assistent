import React, { Component } from 'react';
// import data from './data';

import './index.css';

class Homework extends Component {
  state = {
    data: [],
  };

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
          <div className="homework">
            <h3>Class Homework</h3>
            <div className="homework__calendar">
              <form action="/">
                select Date: <input type="date" name="homework__date" />
                <input type="submit" />
              </form>
            </div>
            <div className="homework__box">
              <h3>Homework Explaination</h3>
              <p>{data[0].Homework_description}</p>
            </div>

            <div className="homework__materials">
              <h3>Helping materials</h3>
              <div className="homework__links">
                <ul>
                  {data[0].HmURLS.map(resource => (
                    <li>
                      <a href={resource} className="homework_resouces">
                        Resource
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Homework;
