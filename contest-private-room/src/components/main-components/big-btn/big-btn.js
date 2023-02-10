import React from 'react';
import "./big-btn.scss";
import {useSelector} from 'react-redux';
const BigBtn = ({btnText})=>{
  const conditionLink = useSelector(state=>state.data.resources.conditions);
  return (
    <div className="btn-link-contest-body">
      <a href={conditionLink} className="btn-link-contest"><span>{btnText}</span></a>
    </div>
  )
}
export default BigBtn;
