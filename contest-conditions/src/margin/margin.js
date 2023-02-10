import React from 'react';
import "./margin.css";
export const Margin = (
  {
    ml=0,
    mb=0,
    mt=0,
    mr=0,
    children
  }
)=>{
  return (
    <div style={{margin:`${mt}px ${mr}px ${mb}px ${ml}px`}}>
      {children}
    </div>
  )
}
