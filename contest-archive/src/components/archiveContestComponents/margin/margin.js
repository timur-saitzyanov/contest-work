import React from 'react';
import "./margin.css";
export const Margin = (
  {
    ml=0,
    mb=0,
    mt=0,
    mr=0,
    mf=null,
    children
  }
)=>{
  if (mf){
    return (
      <div style={{margin:`${mf}px`}}>
        {children}
      </div>
    )
  }
  return (
    <div style={{margin:`${mt}px ${mr}px ${mb}px ${ml}px`}}>
      {children}
    </div>
  )
}
