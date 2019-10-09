import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export default function Input({
  label,
  id,
  type,
  placeholder,
  className,
  htmlFor,
  value,
  onChange,
  name,
}) {
  return (
    <label htmlFor={htmlFor} className="input-label">
      {label}
      <input
        name={name}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className={`input-type ${className}`}
        onChange={onChange}
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  id: 0,
  className: '',
  value: '',
};
