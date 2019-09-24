import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import singUpValidation from '../utils/schema';
import Input from '../../common/Input';
import Button from '../../common/Button';

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
    const { error, password, username } = this.state;
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
            className="inputClass"
            onChange={this.onChangHandler}
          />

          <Input
            name="password"
            id="password"
            value={password}
            type="password"
            placeholder="Passwrod"
            className="inputClass"
            onChange={this.onChangHandler}
          />
          <div className="buttonClass">
            <Button value="Log In" />
          </div>
          <Link className="link" to="/">
            Forget password
          </Link>
          <p className="error-message">
            {error ? 'Please correct your email or password' : null}
          </p>
        </form>
      </div>
    );
  }
}
export default LogIn;
