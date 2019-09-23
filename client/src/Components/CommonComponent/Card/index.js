import React from 'react';
import './index.css';

const Card = ({ title, desc }) => {
  return (
    <div className="card-box">
      <div className="card-box__title">
        <h3 className="title">{title}</h3>
      </div>
      <div className="card-box__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
