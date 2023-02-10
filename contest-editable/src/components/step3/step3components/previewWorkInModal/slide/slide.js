import React from 'react';
import "./slide.scss";
import GetImageToUri from '../../../../../../../../GetImageToUri';

export const Slide = ({slide})=>{
  // в map вставляется
  return (
    <a href={"/"} className={"slide-wrapper"}>
        <div className="imageWrapper">
            <GetImageToUri imgProps={{
                draggable:false,
            }} image={slide.image} params={'resize/154-192'}/>
        </div>
        <div className="slideBottomText">
            <p className={"yarn-name"}>{slide.name}</p>
            <div className={"one-row"}>
                <span className={"bg-square"} style={{backgroundColor: slide['background-color']}}/>
                <span className={"color-number"}>{slide['color-number']}</span>
                <span className={"color-text"}>{slide['color-text']}</span>
            </div>
        </div>
    </a>
  )
}
