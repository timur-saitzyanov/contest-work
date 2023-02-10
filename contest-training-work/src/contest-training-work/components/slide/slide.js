import React from 'react';
import "./slide.scss";

export const Slide = ({slide})=>{
  // в map вставляется
  return (
    <a href={"/"} className={"slide-wrapper"}>
      <img className={"slide-image"} src={slide.img} alt=""/>
      <p className={"yarn-name"}>{slide.name}</p>
      <div className={"one-row"}>
        <span className={"bg-square"} style={{backgroundColor: slide['background-color']}}/>
        <span className={"color-number"}>{slide['color-number']}</span>
        <span className={"color-text"}>{slide['color-text']}</span>
      </div>
    </a>
  )
}
