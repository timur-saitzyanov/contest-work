import React from "react";
import "./like-count.scss";

const LikeCount = ({countLike, place, archive, lk, liked})=>{ return (
  <span className={(place ||archive||lk) ? 'like-number disabled' : liked ? 'like-number active' : 'like-number'}>{countLike}</span>
)}
export default LikeCount;
