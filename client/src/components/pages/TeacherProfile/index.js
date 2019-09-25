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
          <div className="box-img">
            <img src={TeacherImage} alt="teacher img" />
          </div>
          <h3 className="teacher-name">{data.name}</h3>
          <p className="teacher-subject">{data.subject} Teacher</p>
        </div>
        <div className="teach-profile__list">
          <button
            type="button"
            onClick={() => this.handelerActive(1)}
            className={active === 1 ? 'btn-border' : ''}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => this.handelerActive(2)}
            className={active === 2 ? 'btn-border' : ''}
          >
            Contact
          </button>
          <button
            type="button"
            onClick={() => this.handelerActive(3)}
            className={active === 3 ? 'btn-border' : ''}
          >
            Interests
          </button>
        </div>
        {active === 1 && (
          <div className="teach-profile__about">
            <p>{data.about}</p>
          </div>
        )}

        {active === 2 && (
          <div className="teach-profile__contact ">
            <ul>
              <li>
                <span>Full Name:&nbsp;</span>
                {data.contact.fullName}
              </li>
              <li>
                <span>mobile Number:&nbsp;</span>
                {data.contact.mobileNumber}
              </li>
              <li>
                <span>Email:&nbsp;</span>
                {data.contact.email}
              </li>
            </ul>
          </div>
        )}

        {active === 3 && (
          <div className="teach-profile__interests">
            <ul>
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
