import React, {useRef, useState} from 'react';
import "./advice-step2.scss";
import {ReactSVG} from 'react-svg';

export const AdviceStep2 = ()=>{
  const step2=useRef(null)
  const [advice, setAdvice] = useState(true)
  const closeAdvice = ()=>{
    setAdvice(()=> false)
    setTimeout(function(){
     step2.current.style.display = "none"
    },1000)
  }
  return (
    <section ref={step2} className={advice ?'advice-section' : 'advice-section closeA'}>
      <section className="step-advice">
        <button className="step-advice-close" >
          <ReactSVG onClick={closeAdvice} wrapper={"span"} src={"/icons/contest-icons/st-cl.svg"}/>
        </button>
        <h2 className="step-advice-title">
          <ReactSVG wrapper={"span"} className={"lamp-icon"} src={"/icons/contest-icons/lamp-icon.svg"}/>
          Советы по оформлению конкурсной работы
        </h2>
        <div className="step-advice-text-block">
          <div className="step-advice-text-block-left">
            <span className="step-advice-subtitle">Придумайте название своей работе</span>
            <p className="step-advice-text">Подчеркните с помощью прилагательных достоинства вашей работы (например:
              легкий шарф,
              теплый кардиган, удобная сумка, милая игрушка, уютный плед и т. д.)</p>
            <span className="step-advice-subtitle">Кратко опишите свою работу</span>
            <p className="step-advice-text"><span className="step-advice-text--unique">Преподнесите работу с выигрышной
                    стороны. Укажите все, что считаете важным. Например:</span>
              <span>Расскажите для кого вы вязали это изделие</span>
              <span>Понравилась ли этому человеку ваша работа</span>
              <span>Как много времени ушло на вязание</span>
              <span>Столкнулись ли Вы с какими трудностями или все прошло на одном дыхании</span>
              <span>Как возникла идея связать эту вещь</span>
              <span>Как вы используете эту вещь</span>
              <span>Расскажите какую-нибудь историю, связанную с этим и зделием</span>
            </p>
          </div>

          <div className="step-advice-text-block-right">
            <span className="step-advice-subtitle">Добавьте фото и схему вашей работы</span>
            <p className="step-advice-text">
                  <span className="step-advice-text--unique">Расположите вашу работу более компактно в центре кадра, так как
                    при загрузке на сайт, она будет обрезана до формата
                    квадратик 1×1</span>
              <span className="step-advice-text--unique">Делайте снимок при дневном освещении или мощном источнике
                    электрического света. Светлая фотография выглядит выигрышнее и
                    у нее больше шансов получить симпатию.</span>
              <span className="step-advice-text--unique">Фотография должна быть четкой, без смазанных деталей.</span>
              <span className="step-advice-text--unique">В кадре должно быть изделие полностью, а не отдельные его
                    детали.</span>
              <span className="step-advice-text--unique">Все объекты, находящиеся в кадре, должны иметь какое-то
                    отношение к вашей работе и гармонично вписываться в общую
                    картину. Лишние детали будут оттягивать внимание на себя и уменьшат шансы на симпатию.</span>
            </p>
          </div>
        </div>
        <span className="look-example-processing">
              <a href="#">
                <span className="look-example-processing-text">Посмотреть пример оформления</span>

                <ReactSVG wrapper={'span'} src={'/icons/contest-icons/two-thin-arrow.svg'}/>
              </a>
        </span>

      </section>
      <div className="active-advice-btn">
        <button className="advice-btn">
          <ReactSVG wrapper={'span'} className="sign-question" src={'/icons/contest-icons/sign-ques.svg'}/>
        </button>
      </div>
    </section>
  )
}
