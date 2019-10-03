/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
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

  signupHandler = () => {
    this.setState({
      auth: true,
    });
  };

  logoutHandler = () => {
    axios.get('/api/v1/logout').then(() => {
      this.setState({
        auth: false,
      });
    });
  };

  render() {
    const { auth, id } = this.state;
    return (
      <>
        <Header logoutHandler={this.logoutHandler} auth={auth} />
        <main className="container">
          <Switch>
            {!auth === null ? (
              <h1>loading</h1>
            ) : auth === false ? (
              <>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route
                  exact
                  path="/login"
                  render={props => (
                    <LogIn signupHandler={this.signupHandler} {...props} />
                  )}
                />
                <Route exact path="/signup" render={() => <SignUp />} />
                <Route
                  exact
                  path="/signup/parent"
                  render={props => <SignUpParent {...props} />}
                />
                <Route render={() => <Redirect to="/" />} />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/logout"
                  render={props => <Home {...props} />}
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
                  path="/student/:subject/:idstudent"
                  render={() => <Subject />}
                />
                <Route
                  exact
                  path="/students/:subjectId/activites/:classId"
                  render={props => <Activities {...props} />}
                />
                <Route
                  exact
                  path="/student/:subject/homework/:class"
                  render={props => <HomeWork {...props} />}
                />
                <Route
                  render={() => <Redirect to={`/profile/parent/${id}`} />}
                />
              </>
            )}
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}
export default App;
