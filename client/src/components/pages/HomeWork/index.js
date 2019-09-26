import React, { Component } from 'react';
import Button from '../../common/Button';
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
            <h3 className="homework__class">Class Homework</h3>
            <div className="homework__calendar">
              <form>
                <div className="homework__select">select Date:</div>
                <input type="date" name="date" className="homework__date" />
                <Button value="Submit" className="homework__submit" />
              </form>
            </div>
            <div className="homework__box">
              <h3 className="homework__explaination">Homework Explaination</h3>
              <p className="homework__text">{data[0].HomeworkDescription}</p>
            </div>

            <div className="homework__materials">
              <h3 className="homework__helping">Helping materials</h3>
              <div>
                <ul className="homework__links">
                  {data[0].HmURLS.map(resource => (
                    <li key={resource.id}>
                      <a
                        href={resource.link}
                        className="homework__resource-link"
                      >
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
