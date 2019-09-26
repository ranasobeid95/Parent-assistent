import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loginValidation from '../utils/loginSchema';
import Input from '../../common/Input';
import Button from '../../common/Button';

import('./index.css');

class LogIn extends Component {
  state = {
    email: '',
    password: '',
    error: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    loginValidation.isValid({ email, password }).then(res => {
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
    const { error, password, email } = this.state;
    const errorMessage = error ? (
      <p className="error-message">Please correct your email or password</p>
    ) : null;
    return (
      <div className="login">
        <p className="login__title">Welcome to parent assistent system</p>
        <form className="login__form" onSubmit={this.handleSubmit}>
          <p className="login__header">LOG IN</p>

          <Input
            label="User Name"
            name="username"
            htmlFor="username"
            id="username"
            value={email}
            type="text"
            placeholder="User name"
            className="login__input"
            onChange={({ target }) => this.setState({ email: target.value })}
          />

          <Input
            label="Password"
            name="password"
            htmlFor="password"
            id="password"
            value={password}
            type="password"
            placeholder="Passwrod"
            className="login__input"
            onChange={({ target }) => this.setState({ password: target.value })}
          />
          <div>
            <Button className="login__button" value="Log In" />
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
