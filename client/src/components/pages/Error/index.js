import React from 'react';
import './index.css';

const Error = ({
  typeError = '500',
  errorDesc = 'Sory the website is unavailable',
}) => {
  return (
    <div className="error">
      <h2 className="error__title">Error</h2>
      <h3 className="error__type">{typeError}</h3>
      <p className="error__desc">{errorDesc}</p>
    </div>
  );
};

export default Error;
