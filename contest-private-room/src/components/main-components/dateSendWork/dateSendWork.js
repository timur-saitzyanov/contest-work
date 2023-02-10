import React from 'react';
import "./dateSendWork.scss";
export const DateSendWork = ({date})=>{
  return(
    <p className={"date-send-work"}>
      {new Date(date).toLocaleDateString('ru', {year:'numeric' ,month: 'long', day: 'numeric'}).slice(0,-2)}</p>
  )
}
