import React from "react";
import "./index.css";

const Card = ({ link, desc }) => {
  return (
    <div className="card-box">
      <div className="card-box__img">
        <img src={link} alt="img for Active"></img>
      </div>
      <div className="card-box__desc">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
