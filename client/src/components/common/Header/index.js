import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import Menu from '../Menu';

import('./index.css');

class Header extends Component {
  state = {
    show: false,
    isSigned: this.props.auth,
  };

  onClickHandler = () => {
    this.setState(oldState => ({
      show: !oldState.show,
    }));
  };

  render() {
    const { show, isSigned } = this.state;
    return (
      <React.Fragment>
        <header className="App-header">
          <div className="logo">
            <img src={logo} alt="Site Logo" className="site-logo" />
          </div>

          <div className="App-identifier">Parent assistant</div>
          <Link onClick={this.onClickHandler} className="hamburger" to="/">
            <div></div>
            <div></div>
            <div></div>
          </Link>
        </header>
        <Menu
          show={show}
          isSigned={isSigned}
          showOrHide={this.onClickHandler}
        />
      </React.Fragment>
    );
  }
}

export default Header;
