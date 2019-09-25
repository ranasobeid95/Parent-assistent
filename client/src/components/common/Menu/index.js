import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const Menu = ({ showOrHide, isSigned: protect, show }) => {
  return (
    <Router>
      <div className={show ? 'nav__menu' : 'hide'}>
        <i
          className="close-icon"
          role="button"
          onClick={() => showOrHide()}
          tabIndex="0"
        ></i>
        <ul className="lists">
          <li>
            <NavLink className="list" to="/">
              Home
            </NavLink>
          </li>
          {protect ? (
            <li>
              <NavLink className="list" to="/">
                Sign Out
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink className="list" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink className="list" to="/login">
                  Log In
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </Router>
  );
};
Menu.propTypes = {
  showOrHide: PropTypes.func,
  isSigned: PropTypes.bool,
  show: PropTypes.bool,
};

Menu.defaultProps = {
  showOrHide: PropTypes.func,
  isSigned: false,
  show: false,
};

export default Menu;
