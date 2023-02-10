import React from 'react';
import "./take-part-condition.scss";
import {ReactSVG} from 'react-svg';
export const TakePartCondition = ()=>{

  if (window.innerWidth > 440){
    let scrollValue = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbarWidth', `${scrollValue/2}px`);
  }

  return (
    <div className="take-part">
      <div className="take-part__body">
        <div className="main__action-every__body">
          <p className="action__label">Условия Еженедельного конкурса вязаных работ</p>
          <div className="main__action-every__container">

            <div className="btns-go-out">
              <a className={"go-to-out"}  href="/profile/works"><span className={"go-to-out-text"}>Принять участие</span></a>
            </div>
          </div>
        </div>
        <div className="action__right-block">
          { window.innerWidth <= 670 ? <ReactSVG src={"/icons/contest-icons/contest-girl-mobile.svg"}/> :
          (window.innerWidth > 670 && window.innerWidth < 1270 ) ? <ReactSVG src={"/icons/contest-icons/contest-girl-planshet.svg"}/> :
            window.innerWidth >= 1270 ? <ReactSVG src={"/icons/contest-icons/Contest-girl-desc.svg"}/> : <ReactSVG src={"/icons/contest-icons/Contest-girl-desc.svg"}/> }
        </div>
      </div>
    </div>
  )
}
