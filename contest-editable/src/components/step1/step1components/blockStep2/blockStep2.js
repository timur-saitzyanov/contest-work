import React from 'react';
import "./blockStep2.scss";

const BlockStep2 = ()=> {
  return (
    <div className="step-text-number contest-work-initial__text-step2">
      <p className="step-text-number__title step-text-number__title--second">Шаг 2
        <svg className="grey-svg-step" width="168" height="11" viewBox="0 0 168 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.7" d="M0.8125 5.12499L162.754 5.125" stroke="#828282"></path>
          <circle opacity="0.7" cx="162.754" cy="5.125" r="4.5" transform="rotate(-180 162.754 5.125)" fill="#828282" stroke="#828282"></circle>
        </svg>
      </p>

      <p className="step-text-number__text">Заполните данные конкурсной работы: придумайте название, опишите этапы
        вязания
        изделия и покажите работу со всех
        наиболее интересных ракурсов.</p>
    </div>
  )
}
export default BlockStep2;
