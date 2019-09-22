import React from "react";
import "./Menu.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Menu = ({ funcClose, protect }) => {
  return (
    <Router>
      <div className="nav__menu">
        <i className="close-icon" onClick={funcClose}></i>
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

export default Menu;
