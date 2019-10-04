import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './index.css';

const Menu = ({ showOrHide, isSigned: protect, show, logoutHandler }) => {
  return (
    <div className={show ? 'nav__menu' : 'hide'}>
      <i
        className="close-icon"
        role="button"
        onClick={() => showOrHide()}
        tabIndex="0"
      ></i>
      <ul className="lists">
        {protect ? (
          <>
            <li>
              <NavLink className="list" to="/profile/parent">
                Home
              </NavLink>
              <NavLink
                onClick={() => {
                  logoutHandler();
                }}
                className="list"
                to="/logout"
              >
                Log out
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink className="list" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="list" to="/signup">
                Sign up
              </NavLink>
            </li>
            <li>
              <NavLink className="list" to="/login">
                Log in
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
Menu.propTypes = {
  showOrHide: PropTypes.func.isRequired,
  isSigned: PropTypes.bool,
  show: PropTypes.bool,
  logoutHandler: PropTypes.func.isRequired,
};

Menu.defaultProps = {
  isSigned: false,
  show: false,
};

export default Menu;
