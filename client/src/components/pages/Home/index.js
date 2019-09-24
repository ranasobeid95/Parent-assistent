import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import './index.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__img__overlay"></div>
      </div>
      <div className="about">
        <h3 className="about__title">About</h3>
        <div className="about__block">
          <div className="about__block__text">
            <p>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <Link to="/" className="login__button">
          <Button value="LogIn" />
        </Link>
        <Link to="/" className="signup__button">
          <Button value="Signup" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
