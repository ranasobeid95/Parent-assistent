import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import('./Header.css');

const Header = () => {
  return (
    <header className='App-header'>
      <div className='logo'>
        <img src={logo} alt='Site Logo' className='site-logo' />
      </div>

      <div className='App-identifier'>Parent assistant</div>
      <Link className='hamburger' to='/'>
        <div></div>
        <div></div>
        <div></div>
      </Link>
    </header>
  );
};

export default Header;
