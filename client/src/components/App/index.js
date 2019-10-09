/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Error from '../pages/Error';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignUpParent from '../pages/SignUpParent';
import LogIn from '../pages/LogIn';
import ParentProfile from '../pages/ParentProfile';
import TeacherProfile from '../pages/TeacherProfile';
import StudentProfile from '../pages/StudentProfile';
import Subject from '../pages/Subject';
import Activities from '../pages/Activities';
import HomeWork from '../pages/HomeWork';
import './index.css';

class App extends Component {
  state = {
    auth: null,
    show: false,
  };

  componentDidMount() {
    axios
      .get('/api/v1/auth')
      .then(result => {
        this.setState({ ...result.data });
      })
      .catch(() => {
        this.setState({ auth: false });
      });
  }

  onClickHandler = () => {
    this.setState(oldState => ({
      show: !oldState.show,
    }));
  };

  onBlurFun = () => {
    this.setState({
      show: false,
    });
  };

  signupHandler = () => {
    this.setState({
      auth: true,
    });
  };

  logoutHandler = () => {
    const { history } = this.props;
    axios
      .get('/api/v1/logout')
      .then(() => {
        this.setState({
          auth: false,
        });
      })
      .catch(err => {
        if (err) {
          history.push('/serverError');
        }
      });
  };

  render() {
    const { auth, show } = this.state;
    return (
      <>
        <Header
          showMenuFun={this.onClickHandler}
          logoutHandler={this.logoutHandler}
          auth={auth}
          show={show}
        />
        <main className="container">
          {auth === null ? (
            <h1>loading</h1>
          ) : auth === false ? (
            <Switch>
              <Route
                exact
                path="/"
                render={props => <Home {...props} onBlurFun={this.onBlurFun} />}
              />
              <Route
                exact
                path="/login"
                render={props => (
                  <LogIn
                    signupHandler={this.signupHandler}
                    {...props}
                    onBlurFun={this.onBlurFun}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={() => <SignUp onBlurFun={this.onBlurFun} />}
              />
              <Route
                exact
                path="/signup/parent"
                render={props => (
                  <SignUpParent {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route path="/serverError" component={Error} />
              <Route
                path="*"
                render={props => (
                  <Error
                    {...props}
                    typeError="404"
                    errorDesc="Page Not found"
                  />
                )}
              />
            </Switch>
          ) : (
            <Switch>
              <Route
                exact
                path="/logout"
                render={props => <Home {...props} onBlurFun={this.onBlurFun} />}
              />
              <Route
                exact
                path="/profile/parent/:id"
                render={props => (
                  <ParentProfile {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route
                exact
                path="/profile/teacher/:id"
                render={props => (
                  <TeacherProfile {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route
                exact
                path="/student/:id"
                render={props => (
                  <StudentProfile {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route
                exact
                path="/student/subject/:subjectId/:idClass"
                render={props => (
                  <Subject {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route
                exact
                path="/students/:subjectId/activites/:classId"
                render={props => (
                  <Activities {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route
                exact
                path="/student/:subjectId/homework/:classId"
                render={props => (
                  <HomeWork {...props} onBlurFun={this.onBlurFun} />
                )}
              />
              <Route path="/serverError" component={Error} />
              <Route
                path="*"
                render={props => (
                  <Error
                    {...props}
                    typeError="404"
                    errorDesc="Page Not found"
                  />
                )}
              />
            </Switch>
          )}
        </main>
        <Footer />
      </>
    );
  }
}
App.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default App;
