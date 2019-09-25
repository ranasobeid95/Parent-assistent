import React, { Component } from 'react';
import './index.css';
import TeacherImage from '../../../assets/teacher.jpg';
import fakeData from './fakeData';
import teacherTape from '../utils/teacherTap';
import renderButton from '../utils/renderButton';

class TeacherProfile extends Component {
  state = {
    data: {},
    activeContent: `about`,
  };

  componentDidMount() {
    this.setState({ data: fakeData.teacher1 });
    // we will make a request to get data by using axios, above line is a fake data
  }

  showContent = tapName => {
    this.setState({ activeContent: tapName });
  };

  render() {
    const { activeContent } = this.state;
    const { data } = this.state;

    return (
      <div className="teach-profile">
        <div>
          <img className="img-teacher" src={TeacherImage} alt="teacher img" />
        </div>
        <h3 className="teacher-name">{data.name}</h3>
        <p className="teacher-subject">{data.subject} Teacher</p>
        <div className="teach-profile__list">
          {renderButton(activeContent, 'About', this.showContent)}
          {renderButton(activeContent, 'Contact', this.showContent)}
          {renderButton(activeContent, 'Interests', this.showContent)}
        </div>
        {teacherTape(activeContent, data)}
      </div>
    );
  }
}

export default TeacherProfile;
