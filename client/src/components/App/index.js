/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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

  loginHandler = () => {
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
    const { auth } = this.state;
    return (
      <>
        <Header logoutHandler={this.logoutHandler} auth={auth} />
        <main className="container">
          {auth === null ? (
            <h1>loading</h1>
          ) : auth === false ? (
            <Switch>
              <Route exact path="/" render={props => <Home {...props} />} />
              <Route
                exact
                path="/login"
                render={props => (
                  <LogIn loginHandler={this.loginHandler} {...props} />
                )}
              />
              <Route
                exact
                path="/logout"
                render={props => <Redirect to="/" {...props} />}
              />
              <Route exact path="/signup" render={() => <SignUp />} />
              <Route
                exact
                path="/signup/parent"
                render={props => <SignUpParent {...props} />}
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
                path="/"
                render={props => <ParentProfile {...props} />}
              />
              <Route
                exact
                path="/logout"
                render={props => <Redirect to="/" {...props} />}
              />
              <Route
                exact
                path="/profile/parent/:id"
                render={props => <ParentProfile {...props} />}
              />
              <Route
                exact
                path="/profile/teacher/:id"
                render={props => <TeacherProfile {...props} />}
              />
              <Route
                exact
                path="/student/:id"
                render={props => <StudentProfile {...props} />}
              />
              <Route
                exact
                path="/student/subject/:subjectId/:idClass"
                render={props => <Subject {...props} />}
              />
              <Route
                exact
                path="/students/:subjectId/activites/:classId"
                render={props => <Activities {...props} />}
              />
              <Route
                exact
                path="/student/:subjectId/homework/:classId"
                render={props => <HomeWork {...props} />}
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
