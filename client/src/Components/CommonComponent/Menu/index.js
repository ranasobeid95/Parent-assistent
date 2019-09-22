import React from "react";
import "./index.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

const Menu = ({ showOrHide, protect, show }) => {
  return (
    <Router>
      <div className={show ? "nav__menu" : "hide"}>
        <i className="close-icon" onClick={() => showOrHide()}></i>
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
