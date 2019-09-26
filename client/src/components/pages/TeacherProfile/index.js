import React, { Component } from 'react';
import './index.css';
import TeacherImage from '../../../assets/teacher.jpg';
import fakeData from './fakeData';

class TeacherProfile extends Component {
  state = {
    data: {},
    activeContent: `about`,
  };

  ActiveContentEnum = Object.freeze({
    ABOUT: 'about',
    CONTACT: 'contact',
    INTERESTS: 'interests'
  });

  componentDidMount() {
    this.setState({ data: fakeData.teacher1 });
    // we will make a request to get data by using axios, above line is a fake data
  }

  showContent = tapName => {
    this.setState({ activeContent: tapName });
  };

  renderButton = (contentId, text) => {
    const { activeContent } = this.state;
    return (
      <button
        type="button"
        onClick={() => this.showContent(contentId)}
        className={`teach-profile__tap ${
          activeContent === contentId ? 'btn-border' : ''
        }`}
      >
        {text}
      </button>
    );
  };

  renderTab = data => {
    const { activeContent } = this.state;
    if (activeContent === 'about') {
      return (
        <div>
          <p className="teach-profile__desc">{data.about}</p>
        </div>
      );
    }
    if (activeContent === 'contact') {
      return (
        <div>
          <ul className="teach-profile__contact-list ">
            <li>
              <span className="contact-list__span">Full Name:&nbsp;</span>
              {data.contact.fullName}
            </li>
            <li>
              <span className="contact-list__span">mobile Number:&nbsp;</span>
              {data.contact.mobileNumber}
            </li>
            <li>
              <span className="contact-list__span">Email:&nbsp;</span>
              {data.contact.email}
            </li>
          </ul>
        </div>
      );
    }
    if (activeContent === 'interests') {
      return (
        <div>
          <ul className="teach-profile__interests-list">
            {data.interests.map(el => {
              return <li key={el.id}>{el.text}</li>;
            })}
          </ul>
        </div>
      );
    }
    return null;
  };

  render() {
    const { data } = this.state;

    return (
      <div className="teach-profile">
        <div>
          <img className="img-teacher" src={TeacherImage} alt="teacher img" />
        </div>
        <h3 className="teacher-name">{data.name}</h3>
        <p className="teacher-subject">{data.subject} Teacher</p>
        <div className="teach-profile__list">
          {this.renderButton(this.ActiveContentEnum.ABOUT, 'About')}
          {this.renderButton(this.ActiveContentEnum.CONTACT, 'Contact')}
          {this.renderButton(this.ActiveContentEnum.INTERESTS, 'Interests')}
        </div>

        {this.renderTab(data)}
      </div>
    );
  }
}

export default TeacherProfile;
