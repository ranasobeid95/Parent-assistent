import React from 'react';
import './index.css';

export default ({
  label,
  id,
  type = 'text',
  placeholder,
  className = 'input-type',
  htmlFor,
  value,
  onChange,
  name,
}) => {
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
};
