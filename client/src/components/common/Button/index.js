import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Button({ value, className }) {
  return (
    <div className="button-div">
      <input
        type="submit"
        name="submit"
        className={`button-input ${className}`}
        value={value}
      />
    </div>
  );
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};
