import React from 'react';
// import data from './data';
import './index.css';

export default class Card extends React.Component {
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
          data.map(({ title, description, id }) => (
            <div className="card-box" key={id}>
              <div className="card-box__title">
                <h5 className="title">{title}</h5>
              </div>
              <div className="card-box__desc">
                <p>{description}</p>
              </div>
            </div>
          ))
        )}
      </>
    );
  }
}
