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
  id: PropTypes.number,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  id: 0,
  type: 'text',
  placeholder: '',
  className: 'input-type',
  htmlFor: '',
  value: '',
  onChange: PropTypes.func,
  name: '',
};
