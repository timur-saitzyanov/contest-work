import React from "react";
import "./wrapper-cards.scss";

const WrapperCards = ({ children }) => {
  return (
    <section className={'cards-goods'}>
      <div className={'cards-goods__container'}>
        {children}
      </div>
    </section>
  )
}
export default WrapperCards;
