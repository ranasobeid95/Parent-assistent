import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import HomeClass from '../../../assets/home__class.jpg';
import './index.css';

const HomePage = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__img-overlay">
          <div className="home__box">
            <h3 className="home__title">
              Help parents to follow their children
            </h3>
            <div className="home__account">
              <Link to="/" className="account__login">
                <Button value="LogIn" className="account__button" />
              </Link>
              <Link to="/" className="account__signup">
                <Button value="Signup" className="account__button" />
              </Link>
            </div>
          </div>
        </div>
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
      <div className="vision">
        <h3 className="vision__title"> Our Vision</h3>
        <div className="vision__text">
          <img src={HomeClass} alt="class-img" className="vision__img"></img>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
