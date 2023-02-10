import React from 'react';
import './blockStep1.scss';

const BlockStep1 = () => {
  return (
    <div className="block-step">
      <svg className="svg-step-right" width="168" height="11" viewBox="0 0 168 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" d="M167.465 5.37891H5.52344" stroke="#F85D71"></path>
        <circle opacity="0.7" cx="5.52344" cy="5.37891" r="4.5" fill="#F85D71" stroke="#F85D71"></circle>
      </svg>
      <span className="svg-active-tablet">
        <svg width="37" height="11" viewBox="0 0 37 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.7" cx="5" cy="5.82422" r="4.5" fill="#C83F51" stroke="#C83F51"/>
          <path opacity="0.7" d="M37 6L5 6" stroke="#C83F51"/>
        </svg>
      </span>
      <div className="step-text-number contest-work-initial__text-step1">
        <p className="step-text-number__title step-text-number__title--active">Шаг 1</p>
        <p className="step-text-number__text">Выберите категории, к которым относится ваша конкурсная работа</p>
      </div>
    </div>
  );
};
export default BlockStep1;
