import React from 'react';
import "./user-name.scss";

const UserName = ({firstName, lastName})=>{
  return (
    <p className="main-contest-my-works-personal-profile-aside__name">
      <span className="main-contest-my-works-personal-profile-aside__first-name">{firstName}</span>
      <span className="main-contest-my-works-personal-profile-aside__last-name">{lastName}</span>
    </p>
  )
}
export default UserName;
