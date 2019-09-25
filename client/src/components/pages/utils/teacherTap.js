import React from 'react';

const teacherTape = (num, data) => {
  if (num === 'about') {
    return (
      <div>
        <p className="teach-profile__desc">{data.about}</p>
      </div>
    );
  }
  if (num === 'contact') {
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
  if (num === 'interests') {
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

export default teacherTape;
