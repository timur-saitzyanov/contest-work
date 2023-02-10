import React from 'react';
import "./winnerWrap.scss";

export const WinnerWrap = ({children})=>{
  return (
    <section  className={"winnersWrap"}>
      {children}
    </section>
  )
}
