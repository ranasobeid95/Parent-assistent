import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import logo from '../../../assets/logo.png';

import('./index.css');

class Header extends Component {
  state = {
    show: false,
  };

  onClickHandler = () => {
    this.setState(oldState => ({
      show: !oldState.show,
    }));
  };

  render() {
    const { auth, logoutHandler } = this.props;
    const { show } = this.state;
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="logo">
            <img src={logo} alt="Site Logo" className="site-logo" />
          </div>

          <div className="App-identifier">Parent assistant</div>
          <button
            type="button"
            onClick={this.onClickHandler}
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
          showOrHide={this.onClickHandler}
        />
      </React.Fragment>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.bool,
  logoutHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  auth: false,
};

export default Header;
