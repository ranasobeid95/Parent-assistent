import React from 'react';
import './index.css';

export default function Button({
  value = 'login',
  className = 'button-input',
}) {
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
