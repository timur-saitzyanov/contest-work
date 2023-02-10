import React from 'react';
import "./dotted-btns-inside.scss";

const DottedBtnsInside = ({firstBtnText, secondBtnText}) => {
  return (
    <button className="main-contest-my-works-personal-profile-main-block-item-work__more-func">
      <svg width="31" height="7" viewBox="0 0 31 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3.20312" cy="3.5" r="3" fill="#E0E0E0"></circle>
        <circle cx="15.2031" cy="3.5" r="3" fill="#E0E0E0"></circle>
        <circle cx="27.2031" cy="3.5" r="3" fill="#E0E0E0"></circle>
      </svg>
      <p className="item-work-more-func-container">
        <a href="#" className="item-work-more-func-container__change">{firstBtnText}</a>
        <a href="#" className="item-work-more-func-container__delete">{secondBtnText}</a>
      </p>
    </button>
  )
}
export default DottedBtnsInside;
