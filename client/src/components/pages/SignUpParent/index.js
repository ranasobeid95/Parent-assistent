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
    error: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      error,
      email,
      userName,
      parentId,
      password,
      confirmPassword,
    } = this.state;
    signUpValidation
      .isValid({ error, email, userName, parentId, password, confirmPassword })
      .then(res => {
        if (!res) {
          this.setState({
            error: true,
          });
        } else {
          this.setState({
            error: false,
          });
        }
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
            id="username"
            value={userName}
            type="text"
            placeholder="Enter your name"
            className="signUp__input"
            onChange={({ target }) => this.setState({ userName: target.value })}
          />
          <Input
            label="Parent-ID"
            name="id"
            id="parentid"
            value={parentId}
            type="number"
            placeholder="Enter your ID"
            className="signUp__input"
            onChange={({ target }) => this.setState({ parentId: target.value })}
          />

          <Input
            label="PAssword"
            name="password"
            id="password"
            value={password}
            type="password"
            placeholder="Enter your Passwrod"
            className="signUp__input"
            onChange={({ target }) => this.setState({ password: target.value })}
          />
          <Input
            label="Confirm-PAssword"
            name="confirmpassword"
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
