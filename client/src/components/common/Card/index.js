import React from 'react';
import axios from 'axios';
import './index.css';

export default class Card extends React.Component {
  state = { data: [] };

  componentDidMount() {
    axios.get('/api/v1//subject/1/activities/1').then(result => {
      const newData = result.data.allActivities;
      this.setState({ data: newData });
    });
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
