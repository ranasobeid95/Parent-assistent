import React, { Component } from 'react';
import './index.css';
import TeacherImage from '../../../assets/teacher.jpg';
import fakeData from './fakeData';

class TeacherProfile extends Component {
  state = {
    data: {},
    active: 1,
  };

  componentDidMount() {
    this.setState({ data: fakeData.teacher1 });
    // we will make a request to get data by using axios, above line is a fake data
  }

  handelerActive = num => {
    this.setState({ active: num });
  };

  render() {
    const { active } = this.state;
    const { data } = this.state;

    return (
      <div className="teach-profile">
        <div className="teach-profile__top">
          <div>
            <img className="img-teacher" src={TeacherImage} alt="teacher img" />
          </div>
          <h3 className="teacher-name">{data.name}</h3>
          <p className="teacher-subject">{data.subject} Teacher</p>
        </div>
        <div className="teach-profile__list">
          <button
            type="button"
            onClick={() => this.handelerActive(1)}
            className={`teach-profile__tap ${active === 1 ? 'btn-border' : ''}`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => this.handelerActive(2)}
            className={`teach-profile__tap ${active === 2 ? 'btn-border' : ''}`}
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => this.handelerActive(3)}
            className={`teach-profile__tap ${active === 3 ? 'btn-border' : ''}`}
          >
            Interests
          </button>
        </div>
        {active === 1 && (
          <div>
            <p className="teach-profile__desc">{data.about}</p>
          </div>
        )}

        {active === 2 && (
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
        )}

        {active === 3 && (
          <div>
            <ul className="teach-profile__interests-list">
              {data.interests.map(el => {
                return <li key={el.id}>{el.text}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default TeacherProfile;
