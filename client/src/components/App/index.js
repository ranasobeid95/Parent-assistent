import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import Error from '../pages/Error';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/login" render={props => <LogIn {...props} />} />
          <Route exact path="/signup" render={() => <SignUp />} />
          <Route exact path="/signup/parent" render={() => <SignUpParent />} />
          <Route
            exact
            path="/profile/parent/:id"
            render={props => <ParentProfile {...props} />}
          />
          <Route
            exact
            path="/profile/teacher/:id"
            render={() => <TeacherProfile />}
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
            render={() => <Error typeError="404" errorDesc="Page Not Found" />}
          />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
