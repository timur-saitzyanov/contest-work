import React, {useRef, useState} from 'react';
import './step-advice-step3.scss';
import {ReactSVG} from 'react-svg';

const StepAdviceStep3 = () => {
  let ads = useRef();
  const [advice, setAdvice] = useState(true)
  function closeAdvice(){
    setAdvice(()=> false)
    setTimeout(function(){
     ads.current.style.display = "none"
    },1000)
  }
  return (
    <section ref={ads} className={advice ? 'advice-appearance' : 'advice-appearance close'}>
      <h2>
        <ReactSVG wrapper={'span'} src={'/icons/contest-icons/advice.svg'}/>
        Советы по оформлению конкурсной работы
      </h2>
      <ReactSVG onClick={closeAdvice} className={'close-advise'} wrapper={'span'} src={'/icons/contest-icons/x-icon.svg'}/>
      <div className="point-to">
        <span className="step-advice-subtitle point-to__label">Укажите из какой пряжи выполнена конкурсная работа</span>
        <span className="point-to__text">Будьте внимательны при выборе товаров, тк неверно указанные данные
              приведут к отказу участия в конкурсе при модерации.</span>
      </div>
      <div className="point-to">
        <span className="step-advice-subtitle point-to__label">Укажите теги</span>
        <span className="point-to__text">Используйте теги, чтобы вашу работу можно было всегда найти по ключевым
              фразам. Используйте не только наиболее частотные
              слова, но и характерные персонализированные для вашей работы теги.</span>
        <div className="point-to-tags">
          <span>Например:</span> <span className="tags-example">#джемпер</span> <span className="tags-example">#детскийджемпер</span> <span className="tags-example">#джемперланаголд</span>
        </div>
      </div>
      <span className="look-example-processing look-example-processing-step3">
       <a href="#">
         <span className="look-example-processing-text">Посмотреть пример оформления</span>
         <ReactSVG wrapper={'span'} src={'/icons/contest-icons/two-thin-arrow.svg'}/>
       </a>
      </span>
    </section>
  );
};
export default StepAdviceStep3;
