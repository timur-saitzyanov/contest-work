import React from 'react';
import "./mainWrapper.scss";

const MainWrapper = ({children})=>{
  return (
    <div className="mainWrapper">
      {children}
    </div>
  )
}
export default MainWrapper;
