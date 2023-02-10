import React, {useEffect} from 'react';
import style from './mobile-modal.module.css';
import {adviceMobileToggle_action} from '../../../../actions/actions';
import {ReactSVG} from 'react-svg';
import {useDispatch, useSelector} from 'react-redux';
import * as ReactDOM from 'react-dom';

export const MobileModalAdvice = () => {
  const dispatch = useDispatch();
  const adviceMobileToggle = useSelector(state=>state.adviceMobileToggle)
  useEffect(() => {
    let btns = document.querySelectorAll('[data-btn="accordion"]');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        this.querySelector('span').classList.toggle(style['active1']);
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }, [adviceMobileToggle]);
  if (!adviceMobileToggle) return null
  return (
    ReactDOM.createPortal(<section className={style['modal-mobile']}>
      <div className={style['modal-mobile__body']}>
        <button onClick={() => {
         dispatch(adviceMobileToggle_action())
        }} className={style['close-mobile-modal-advice']}>
          <ReactSVG wrapper={'span'} src={'/icons/contest-icons/x-close-yarn.svg'}/>
        </button>
        <div className={style['title-modal']}>
          <ReactSVG wrapper={'span'} src={'/icons/contest-icons/advice-modal-mobile.svg'}/>
          <h3 className={style['title-modal__text']}>Советы по оформлению конкурсной работы</h3>
        </div>

        <article className={style['modal-item']}>
          <button data-btn={'accordion'} className={style['modal-item__btn']}>
            <p className={style['modal-item__title']}>Придумайте название своей работе</p>
            <ReactSVG className={style['modal-item__icon']} wrapper={'span'} src={'/icons/contest-icons/arrow-down.svg'}/>
          </button>
          <div className={style['modal-item__content']}>
            <p className={style['modal-item__subtitle']}>Подчеркните с помощью прилагательных достоинства вашей работы (например: легкий шарф, теплый кардиган, удобная сумка, милая игрушка, уютный плед и т. д.)</p>
          </div>
        </article>

        <article className={style['modal-item']}>
          <button data-btn={'accordion'} className={style['modal-item__btn']}>
            <p className={style['modal-item__title']}>Кратко опишите свою работу</p>
            <ReactSVG className={style['modal-item__icon']} wrapper={'span'} src={'/icons/contest-icons/arrow-down.svg'}/>
          </button>
          <div className={style['modal-item__content']}>
            <p className={style['modal-item__subtitle']}>
              Преподнесите работу с выигрышной стороны. Укажите все, что считаете важным. Например:Расскажите для кого вы вязали это изделие
              Понравилась ли этому человеку ваша работа
              Как много времени ушло на вязание
              Столкнулись ли Вы с какими трудностями или все прошло на одном дыхании
              Как возникла идея связать эту вещь
              Как вы используете эту вещь
              Расскажите какую-нибудь историю, связанную с этим изделием
            </p>
          </div>
        </article>

        <article className={style['modal-item']}>
          <button data-btn={'accordion'} className={style['modal-item__btn']}>
            <p className={style['modal-item__title']}>Добавьте фото и схему вашей работы</p>
            <ReactSVG className={style['modal-item__icon']} wrapper={'span'} src={'/icons/contest-icons/arrow-down.svg'}/>
          </button>
          <div className={style['modal-item__content']}>
            <p className={style['modal-item__subtitle']}>
              Расположите вашу работу более компактно в центре кадра, так как при загрузке на сайт, она будет обрезана до формата квадратик 1×1 Делайте снимок при дневном освещении или мощном источнике электрического света. Светлая фотография выглядит выигрышнее и у нее больше шансов получить симпатию.Фотография должна быть четкой, без смазанных деталей. В кадре должно быть изделие полностью, а не отдельные его детали. Все объекты, находящиеся в кадре, должны иметь какое-то отношение к вашей работе и гармонично вписываться в общую картину. Лишние детали будут оттягивать внимание на себя и уменьшат шансы на симпатию.
            </p></div>
        </article>

        <article className={style['modal-item']}>
          <button data-btn={'accordion'} className={style['modal-item__btn']}>
            <p className={style['modal-item__title']}>Укажите из какой пряжи выполнена конкурсная работа</p>
            <ReactSVG className={style['modal-item__icon']} wrapper={'span'} src={'/icons/contest-icons/arrow-down.svg'}/>
          </button>
          <div className={style['modal-item__content']}>
            <p className={style['modal-item__subtitle']}>
              Укажите из какой пряжи выполнена конкурсная работаБудьте внимательны при выборе товаров, тк неверно указанные данные приведут к отказу участия в конкурсе при модерации.
            </p></div>
        </article>


        <a className={style['modal-item__link']} href="#">
          <span className={style['link-mobile-text']}>Посмотреть пример оформления</span>
          <ReactSVG className={style['link-mobile-icon']} wrapper={'span'} src={'/icons/contest-icons/arr-mobile.svg'}/>
        </a>
      </div>
    </section>, document.querySelector('html body')
    ))
};
