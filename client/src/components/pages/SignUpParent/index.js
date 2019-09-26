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
    // errors: [],
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
        // console.log(values);
        return values;
      })
      .catch(error => {
        return error;
        // console.log(error.errors);
        // return this.setState({ errors: error.errors });
      });
  };

  render() {
    const { email, userName, parentId, password, confirmPassword } = this.state;

    return (
      <div className="signUp">
        <form className="signUp__form" onSubmit={this.handleSubmit}>
          <p className="signUp__header">Sign Up</p>

          <Input
            label="Your-Email"
            name="email"
            htmlFor="email"
            id="email"
            value={email}
            type="email"
            placeholder="example@gmail.com"
            className="signUp__input"
            onChange={({ target }) => this.setState({ email: target.value })}
          />

          <Input
            label="User-Name"
            name="username"
            htmlFor="username"
            id="username"
            value={userName}
            type="text"
            placeholder="Enter your name"
            className="signUp__input"
            onChange={({ target }) => this.setState({ userName: target.value })}
          />
          <Input
            label="Parent-ID"
            name="parentid"
            htmlFor="parentid"
            id="parentid"
            value={parentId}
            type="number"
            placeholder="Enter your ID"
            className="signUp__input"
            onChange={({ target }) => this.setState({ parentId: target.value })}
          />

          <Input
            label="Password"
            name="password"
            htmlFor="password"
            id="password"
            value={password}
            type="password"
            placeholder="Enter your Passwrod"
            className="signUp__input"
            onChange={({ target }) => this.setState({ password: target.value })}
          />
          <Input
            label="Confirm-Password"
            name="confirmpassword"
            htmlFor="confirmpassword"
            id="confirmpassword"
            value={confirmPassword}
            type="password"
            placeholder="Enter your Passwrod again"
            className="signUp__input"
            onChange={({ target }) =>
              this.setState({ confirmPassword: target.value })
            }
          />
          <div>
            <Button className="signUp__button" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}
