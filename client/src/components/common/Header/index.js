import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import logo from '../../../assets/logo.png';

import('./index.css');

const Header = ({ auth, logoutHandler, showMenuFun, show }) => {
  return (
    <React.Fragment>
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="Site Logo" className="site-logo" />
        </div>

        <div className="App-identifier">Parent assistant</div>
        <button
          type="button"
          onClick={showMenuFun}
          className="hamburger"
          style={{ background: 'none', border: 0 }}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
      </header>
      <Menu
        logoutHandler={logoutHandler}
        show={show}
        isSigned={auth}
        showOrHide={showMenuFun}
      />
    </React.Fragment>
  );
};

Header.propTypes = {
  auth: PropTypes.bool,
  logoutHandler: PropTypes.func.isRequired,
  showMenuFun: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

Header.defaultProps = {
  auth: false,
  show: false,
};

export default Header;
