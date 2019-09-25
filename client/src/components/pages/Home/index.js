import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import './index.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__img-overlay"></div>
      </div>
      <div className="about">
        <h3 className="about__title">About</h3>
        <div className="about__text">
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
      <div className="account">
        <Link to="/" className="account__login">
          <Button value="LogIn" className="account__button" />
        </Link>
        <Link to="/" className="account__signup">
          <Button value="Signup" className="account__button" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
