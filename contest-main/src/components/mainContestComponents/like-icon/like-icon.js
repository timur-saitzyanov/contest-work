import React from "react";
import "./like-icon.scss";
import {ReactSVG} from 'react-svg';

const LikeIcon = ({place, archive, lk, liked}) => {
  if (place || archive || lk){
    return <ReactSVG className={"like-disabled"} src={"/icons/contest-icons/disabledLike.svg"}/>
  }
  return (
    <ReactSVG className={liked ? "likesvg active" : "likesvg"} wrapper={"span"} src={"/icons/contest-icons/small-like.svg"}/>
  );
}
export default LikeIcon;
