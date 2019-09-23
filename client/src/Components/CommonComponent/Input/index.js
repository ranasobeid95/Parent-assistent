import React from 'react';
import './index.css';

export default ({
  label = 'username',
  type = 'text',
  placeholder = 'Enter your UserName',
  className = 'input-type',
  htmlFor = 'user name',
}) => {
  return (
    <label htmlFor={htmlFor} className="input-label">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        className={`input-type ${className}`}
      />
    </label>
  );
};
