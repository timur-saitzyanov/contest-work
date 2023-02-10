import React from 'react';
import "./take-part.scss";
import {ReactSVG} from 'react-svg';
import {useSelector} from 'react-redux';
export const TakePart = ()=>{
    const toTakePartLink = useSelector(state=>state.data.resources.create);
    const conditionsContestLink = useSelector(state=>state.data.resources.conditions);
  if (window.innerWidth > 440){
    let scrollValue = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbarWidth', `${scrollValue/2}px`);
  }

  return (
    <div className="take-part">
      <div className="take-part__body">
        <div className="main__action-every__body">
          <p className="action__label">Участвуйте в Еженедельном конкурсе вязаных работ</p>
          <div className="main__action-every__container">
            <div className="action__left-block">
              <div className="action__cards">
                <div className="action__card">
                    <ReactSVG  src={"/icons/contest-icons/img-ico12907.svg"}/>
                  <p className="action__text">
                    Выкладывайте фото своих вязаных работ
                  </p>
                </div>
                <div className="action__card">
                    <ReactSVG  src={"/icons/contest-icons/img-ico2.svg"}/>
                  <p className="action__text">
                    Участвуйте в конкурсе каждую неделю
                  </p>
                </div>
                <div className="action__card">
                    <ReactSVG  src={"/icons/contest-icons/img-ico3.svg"}/>
                  <p className="action__text">
                    Выигрывайте до 500 рублей в каждой категории
                  </p>
                </div>

              </div>
            </div>
            <div className="btns-go-out">
              <a className={"go-to-out"}  href={'/profile/works'}><span className={"go-to-out-text"}>Принять участие</span></a>
              <a className={"condition-link"} href={conditionsContestLink}><span className={"condition-link-text"}>Условия конкурса</span></a>
            </div>
          </div>
        </div>
        <div className="action__right-block">
          { window.innerWidth <= 670 ? <ReactSVG src={"/icons/contest-icons/contest-girl-mobile.svg"}/> :
          (window.innerWidth > 670 && window.innerWidth < 1270 ) ? <ReactSVG src={"/icons/contest-icons/contest-girl-planshet.svg"}/> :
            window.innerWidth > 1270 ? <ReactSVG src={"/icons/contest-icons/Contest-girl-desc.svg"}/> : <ReactSVG src={"/icons/contest-icons/Contest-girl-desc.svg"}/> }
        </div>
      </div>
    </div>
  )
}
