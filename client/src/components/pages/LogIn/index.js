import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { singUpValidation } from '../utils/schema';

import Button from '../../common/Button/index';

import('./index.css');

class LogIn extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  onChangHandler = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    singUpValidation()
      .isValid({ username, password })
      .then(res => {
        if (!res) {
          this.setState({
            error: true,
          });
        } else {
          this.setState({
            error: false,
          });
          // axios stuff goes here
        }
      });
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
          <p>
            {this.state.error ? 'Please correct your email or password' : null}
          </p>
        </form>
      </div>
    );
  }
}
export default LogIn;
