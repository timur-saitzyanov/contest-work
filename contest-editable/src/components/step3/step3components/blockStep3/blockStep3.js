import React from 'react';
import './blockStep3.scss';
import {ReactSVG} from 'react-svg';

const BlockStep3 = () => {
  return (
    <div className="block-step3">
      <ReactSVG className={"svg-3step"} src={"/icons/contest-icons/svg-desctop_hope_last.svg"} wrapper={"span"}/>
      <span className="svg-active-tablet">
        <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.7" cx="5" cy="5.82422" r="4.5" fill="#C83F51" stroke="#C83F51"/>
          <path opacity="0.7" d="M37 6L5 6" stroke="#C83F51"/>
        </svg>
      </span>
      <div className="step-text-number contest-work-initial__text-step1">
        <p className="step-text-number__title step-text-number__title--active">Шаг 3</p>
        <p className="step-text-number__text">Выберите товары, из которых связано ваше конкурсное изделие</p>
      </div>
    </div>
  );
};
export default BlockStep3;
