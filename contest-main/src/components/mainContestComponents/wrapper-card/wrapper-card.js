import React from "react";
import "./wrapper-card.scss";


const WrapperCard = ({ children, dataValue, place}) => {
  if (window.innerWidth <=360){
    return (
    <div className={place === 1  ? "cards-goods__item goods bgFirst withoutBorder" :
      place === 2  ? "cards-goods__item goods bgSecond withoutBorder" :
        place === 3  ? "cards-goods__item goods bgThird withoutBorder" :
          "cards-goods__item goods withoutBorder"} data-id={dataValue}>
      <div className="goods__body">
        {children}
      </div>
    </div>
  )
  }
  return (
    <div className={place === 1  ? "cards-goods__item goods bgFirst" : place === 2  ? "cards-goods__item goods bgSecond" : place === 3  ? "cards-goods__item goods bgThird" : "cards-goods__item goods"} data-id={dataValue}>
      <div className="goods__body">
        {children}
      </div>
    </div>
  )
}
export default WrapperCard;
