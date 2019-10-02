import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './index.css';
import TeacherImage from '../../../assets/teacher.jpg';

class TeacherProfile extends Component {
  state = {
    data: {},
    activeContent: `about`,
  };

  ActiveContentEnum = Object.freeze({
    ABOUT: 'about',
    CONTACT: 'contact',
    INTERESTS: 'interests',
  });

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    axios.get(`/api/v1/profile/teacher/${id}`).then(result => {
      const {
        data: [data],
      } = result;
      this.setState({ data });
    });
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
          <p className="teach-profile__desc">{data.bio}</p>
        </div>
      );
    }
    if (activeContent === 'contact') {
      return (
        <div>
          <ul className="teach-profile__contact-list ">
            <li>
              <span className="contact-list__span">Full Name:&nbsp;</span>
              {`${data.first_name}  ${data.last_name}`}
            </li>
            <li>
              <span className="contact-list__span">mobile Number:&nbsp;</span>
              99999999999999
            </li>
            <li>
              <span className="contact-list__span">Email:&nbsp;</span>
              testing@email.com
            </li>
          </ul>
        </div>
      );
    }
    if (activeContent === 'interests') {
      return (
        <div>
          <ul className="teach-profile__interests-list">
            <li>Helping people</li>
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
        <h3 className="teacher-name">
          {data.first_name}&nbsp;
          {data.last_name}
        </h3>
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

TeacherProfile.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.any,
    }),
  }).isRequired,
};

export default TeacherProfile;
