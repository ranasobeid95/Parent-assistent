import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './index.css';

export default class Card extends React.Component {
  state = { data: [] };

  componentDidMount() {
    const {
      params: { subjectId, classId },
    } = this.props;
    axios
      .get(`/api/v1/subjects/${subjectId}/activities/${classId}`)
      .then(result => {
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

Card.propTypes = {
  params: PropTypes.objectOf(PropTypes.any).isRequired,
};
