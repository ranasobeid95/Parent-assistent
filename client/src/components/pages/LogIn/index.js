import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/index';

import('./index.css');

class LogIn extends Component {
  state = {
    username: '',
    password: '',
  };

  onChangHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    // axios stuff goes here
    e.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <p className="login__title">Welcome to parent assistent system</p>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <p>LOGIN</p>
          <label htmlFor="username">
            <input
              placeholder="User name"
              name="username"
              id="username"
              type="text"
              value={this.state.username}
              onChange={this.onChangHandler}
            />
          </label>
          <label htmlFor="password">
            <input
              placeholder="Passwrod"
              name="password"
              id="password"
              type="text"
              value={this.state.password}
              onChange={this.onChangHandler}
            />
          </label>
          <Button value="Log In"></Button>
          <Link className="link" to="/">
            Forget password
          </Link>
        </form>
      </div>
    );
  }
}

export default LogIn;
