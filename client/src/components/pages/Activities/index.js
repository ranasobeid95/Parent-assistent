import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../common/Card';
import './index.css';

const Activities = ({ match: { params } }) => {
  return (
    <div className="ActivityName">
      <p className="ActivityName__tiltle">Class Activities</p>
      <Card params={params} />
    </div>
  );
};

Activities.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Activities;
