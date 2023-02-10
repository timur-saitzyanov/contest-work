import React from 'react';
import "./icon.scss";
import Svg from '../../../../../../modules/Svg';
const Icon = ({iconName})=>{
  return (
    <div className="small-card-contest__img">
      <Svg name={`contest-${iconName}`} />
    </div>
  )
}
export default Icon;
