import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './index.css';

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
      history,
    } = this.props;
    axios
      .get(`/api/v1/profile/teacher/${id}`)
      .then(result => {
        this.setState({ data: result.data[0] });
      })
      .catch(() => {
        history.push('/serverError');
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
              {data.mobile}
            </li>
            <li>
              <span className="contact-list__span">Email:&nbsp;</span>
              {data.email}
            </li>
          </ul>
        </div>
      );
    }
    if (activeContent === 'interests') {
      return (
        <div>
          <ul className="teach-profile__interests-list">
            <li>{data.interest}</li>
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
          <img className="img-teacher" src={data.image_url} alt="teacher img" />
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TeacherProfile;
