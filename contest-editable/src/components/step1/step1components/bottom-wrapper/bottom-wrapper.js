import React from 'react';
import "./bottom-wrapper.scss";

const BottomWrapper = ({children})=>{
  return (
    <div className="block-step-right">
      {children}
    </div>
  )
}
export default BottomWrapper;
