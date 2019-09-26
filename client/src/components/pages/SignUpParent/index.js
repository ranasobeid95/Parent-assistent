import React from 'react';
import Input from '../../common/Input';
import Button from '../../common/Button';
import signUpValidation from '../utils/signUpValidation';
import './index.css';

export default class SignUp extends React.Component {
  state = {
    email: '',
    userName: '',
    parentId: '',
    password: '',
    confirmPassword: '',
    errors: {},
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, userName, parentId, password, confirmPassword } = this.state;
    signUpValidation
      .validate(
        { email, userName, parentId, password, confirmPassword },
        { abortEarly: false }
      )
      .then(values => {
        // fetch
        return values;
      })
      .catch(error => {
        const objError = {};
        error.inner.forEach(fielderror => {
          objError[fielderror.path] = fielderror.message;
        });
        return this.setState({ errors: objError });
      });
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const {
      errors,
      email,
      userName,
      parentId,
      password,
      confirmPassword,
    } = this.state;
    return (
      <div className="signUp">
        <form className="signUp__form" onSubmit={this.handleSubmit}>
          <p className="signUp__header">Sign Up</p>

          <Input
            label="Your-Email"
            name="email"
            htmlFor="email"
            id="email"
            value={email.value}
            type="email"
            placeholder="example@gmail.com"
            className="signUp__input"
            onChange={this.handleChange}
          />
          {errors.email && <p className="error-field">errors.email</p>}
          <Input
            label="User-Name"
            name="userName"
            htmlFor="username"
            id="username"
            value={userName.value}
            type="text"
            placeholder="Enter your name"
            className="signUp__input"
            onChange={this.handleChange}
          />
          {errors.userName && <p className="error-field">errors.userName</p>}

          <Input
            label="Parent-ID"
            name="parentId"
            htmlFor="parentid"
            id="parentid"
            value={parentId.value}
            type="text"
            placeholder="Enter your ID"
            className="signUp__input"
            onChange={this.handleChange}
          />
          {errors.parentId && <p className="error-field">errors.parentId</p>}

          <Input
            label="Password"
            name="password"
            htmlFor="password"
            id="password"
            value={password.value}
            type="password"
            placeholder="Enter your Passwrod"
            className="signUp__input"
            onChange={this.handleChange}
          />
          {errors.password && <p className="error-field">errors.password </p>}

          <Input
            label="Confirm-Password"
            name="confirmPassword"
            htmlFor="confirmpassword"
            id="confirmpassword"
            value={confirmPassword.value}
            type="password"
            placeholder="Enter your Passwrod again"
            className="signUp__input"
            onChange={this.handleChange}
          />
          {errors.confirmPassword && (
            <p className="error-field">errors.confirmPassword</p>
          )}

          <div>
            <Button className="signUp__button" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}
