import React from 'react';
import "./user-avatar.scss";

const UserAvatar = ({imgLink})=>{
  let srcImage = "https://192.168.0.104:3013/products/2192/8/resize/232-290/b3d.jpeg";
  return (
    <div className="main-contest-my-works-personal-profile-aside__avatar">
      <picture>
        <img src={{srcImage} || imgLink} srcSet={`${srcImage} 320w, ${srcImage} 1600w`} className="private-profile__photo" alt="" />
      </picture>
    </div>
  )
}
export default UserAvatar;
