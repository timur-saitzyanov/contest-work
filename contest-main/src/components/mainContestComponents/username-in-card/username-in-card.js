import React from "react";
import "./username-in-card.scss";

const UserNameInCard = ({userName, place}) => {
  return (
    <div className={place ? 'goods__username short' : 'goods__username'}>{userName}</div>
  )
}
export default UserNameInCard;
