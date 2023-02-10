import React from 'react';
import "./wrapper-cards.scss";

const WrapperCards = ({children})=>{
  return (
    <section className="main-contest-my-works-personal-profile-main-block__items-works">
      {children}
    </section>
  )
}
export default WrapperCards;
