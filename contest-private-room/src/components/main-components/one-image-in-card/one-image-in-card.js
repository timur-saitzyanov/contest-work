import React from 'react';
import style from "./one-image-in-card.scss";
import GetImageToUri from '../../../../../../GetImageToUri';

//"main-contest-my-works-personal-profile-main-block-item-work__img-cont"
const OneImageInCard = ({oneImageObj,children}) => {
  return (
    <a className={style["main-contest-my-works-personal-profile-main-block-item-work__img-cont"]}>
      <GetImageToUri image={oneImageObj} params={`resize/500-500`}/>
      {children}
  </a>
  )
}
export default OneImageInCard;
