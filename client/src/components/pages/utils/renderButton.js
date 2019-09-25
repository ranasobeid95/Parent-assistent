import React from 'react';

const renderButton = (activeContent, text, showContent) => {
  return (
    <button
      type="button"
      onClick={() => showContent(text.toLowerCase())}
      className={`teach-profile__tap ${
        activeContent === text.toLowerCase() ? 'btn-border' : ''
      }`}
    >
      {text}
    </button>
  );
};

export default renderButton;
