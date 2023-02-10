import React from "react";
import "./avatar-in-card.scss";
import GetImageToUri from '../../../../../../GetImageToUri';

const AvatarInCard = ({imgUrl}) => {
  return (
    <div className="rounded-image">
      <GetImageToUri image={imgUrl} params={"resize/40-40"}/>
    </div>
  )
}
export default AvatarInCard;
