import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Error = ({ typeError, errorDesc }) => {
  return (
    <div className="error">
      <h2 className="error__title">Error</h2>
      <h3 className="error__type">{typeError}</h3>
      <p className="error__desc">{errorDesc}</p>
    </div>
  );
};
Error.propTypes = {
  typeError: PropTypes.string,
  errorDesc: PropTypes.string,
};

Error.defaultProps = {
  typeError: '500',
  errorDesc: 'Sory the website is unavailable',
};

export default Error;
