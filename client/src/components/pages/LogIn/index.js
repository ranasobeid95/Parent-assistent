import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import signUpValidation from '../utils/schema';
import Input from '../../common/Input';
import Button from '../../common/Button';

import('./index.css');

class LogIn extends Component {
  state = {
    username: '',
    password: '',
    error: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    signUpValidation.isValid({ username, password }).then(res => {
      this.setState({
        error: !!res,
      });
      // axios stuff goes here
    });
  };

  render() {
    const { error, password, username } = this.state;
    const errorMessage = error ? (
      <p className="error-message">Please correct your email or password</p>
    ) : null;
    return (
      <div className="login">
        <p className="login__title">Welcome to parent assistent system</p>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <p className="login__header">LOGIN</p>

          <Input
            name="username"
            id="username"
            value={username}
            type="text"
            placeholder="User name"
            className="login__input"
            onChange={({ target }) => this.setState({ username: target.value })}
          />

          <Input
            name="password"
            id="password"
            value={password}
            type="password"
            placeholder="Passwrod"
            className="login__input"
            onChange={({ target }) => this.setState({ password: target.value })}
          />
          <div>
            <Button value="Log In" />
          </div>
          <Link className="link" to="/forgetPassword">
            Forget password?
          </Link>
          {errorMessage}
        </form>
      </div>
    );
  }
}
export default LogIn;
