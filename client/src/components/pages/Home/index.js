import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '../../common/Button';
import HomeClass from '../../../assets/home__class.jpg';
import './index.css';

const HomePage = ({ onBlurFun }) => {
  return (
    <div className="home" role="button" tabIndex={0} onClick={onBlurFun}>
      <div className="home__header">
        <div className="home__img-overlay">
          <div className="home__box">
            <h3 className="home__title">
              Help parents to follow their children
            </h3>
            <div className="home__account">
              <Link to="/login" className="account__login">
                <Button value="LogIn" className="account__button" />
              </Link>
              <Link to="/signup" className="account__signup">
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
            Our App is to help parent to follow their children in the school and
            know their homeworks and recently activities .
          </p>
        </div>
      </div>
      <div className="vision">
        <h3 className="vision__title"> Our Vision</h3>
        <div className="vision__text">
          <img src={HomeClass} alt="class-img" className="vision__img"></img>
          <p>
            We hope that Parents could be in touch all the time with their
            children teachers, to keep abreast of all new duties and school
            activities and also to know their children assessment Regularly and
            sequentially.
          </p>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  onBlurFun: PropTypes.func.isRequired,
};

export default HomePage;
