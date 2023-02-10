import React from 'react';
import './contest-conditions.scss';
import {TransitionReferences} from './transition-references/transition-references';
import {Margin} from './margin/margin';
import {TakePartCondition} from './take-part-condition/take-part-condition';
import {ReactSVG} from 'react-svg';

export const ContestConditions = () => {
  return (
    <section>
      <TakePartCondition/>
      <section  className="main-condition-koncurs-take-part">
        <p className="main-condition-koncurs-take-part__title">Как принять участие</p>
        <ul className="main-condition-koncurs-take-part__items">
          <li className="main-condition-koncurs-take-part__item"><span className="item-number-condition">1</span><p className="main-condition-koncurs-take-part__text">Ознакомтесь с <a href="/contest/guide">примером конкурсной работы</a></p>
          </li>
            <li className="main-condition-koncurs-take-part__item"><span className="item-number-condition">2</span><p className="main-condition-koncurs-take-part__text">Сфотографируйте свою работу</p>
          </li>
          <li className="main-condition-koncurs-take-part__item"><span className="item-number-condition">3</span>
            <p className="main-condition-koncurs-take-part__text">Добавьте её в <a href="/profile/works">личный кабинет</a></p></li>
          <li className="main-condition-koncurs-take-part__item"><span className="item-number-condition">4</span>
            <p className="main-condition-koncurs-take-part__text">Дождитесь прохождения модерации</p></li>
          <li className="main-condition-koncurs-take-part__item"><span className="item-number-condition">5</span>
            <p className="main-condition-koncurs-take-part__text">Следите за голосованием на <a href="/contest">странице конкурса</a></p></li>
        </ul>
        <p className="main-condition-koncurs-take-part__notice">
          <span>Не забывайте поддерживать других участников конкурса своими голосами.</span>
          <span>Желаем удачи!</span>
        </p>
      </section>

      <section  className={'category-condition'}>
        <h2 className="category-title">Категории:</h2>
        <div className="category-condition-items">
          <div className="category-condition-item">
            <ReactSVG wrapper="span" className={'category-condition-item-img'} src={'/icons/contest-icons/category1.svg'}/>
            <span className={'category-condition-item__text'}>Одежда</span>
          </div>
          <div className="category-condition-item">
            <ReactSVG wrapper="span" className={'category-condition-item-img'} src={'/icons/contest-icons/category2.svg'}/>
            <span className={'category-condition-item__text'}>Игрушки</span>
          </div>
          <div className="category-condition-item">
            <ReactSVG wrapper="span" className={'category-condition-item-img'} src={'/icons/contest-icons/category3.svg'}/>
            <span className={'category-condition-item__text'}>Аксессуары</span>
          </div>
        </div>
        <p className="category-condition__text">Участие допускается только в одной категории в неделю.</p>
      </section>

      <section className="prize">
        <h2 className="prize-title"><span className={'prize-title-active'}>3x</span>Призы</h2>
        <div className="prize-items">
          <div className="prize-item">
            <ReactSVG className={'prize-item-img'} src={'/icons/contest-icons/1.svg'}/>
            <p className="prize-item-number">500</p>
            <p className="prize-item-text">баллов</p>
          </div>
          <div className="prize-item">
            <ReactSVG className={'prize-item-img'} src={'/icons/contest-icons/2.svg'}/>
            <p className="prize-item-number">200</p>
            <p className="prize-item-text">баллов</p>
          </div>
          <div className="prize-item">
            <ReactSVG className={'prize-item-img'} src={'/icons/contest-icons/3.svg'}/>
            <p className="prize-item-number">100</p>
            <p className="prize-item-text">баллов</p>
          </div>
        </div>
        <div className="prize-main-text">
          <p>Еженедельно в конкурсе 9 победителей: по три в каждой категории.</p>
          <p>Победителям конкурса приходит оповещение на почту и на счет в личном кабинете зачисляются баллы в соответствии с занятым местом. 1 балл = 1 рубль.</p>
          <p>Баллами вы можете оплачивать покупки в нашем магазине, как частично, так и полностью. Баллы не имеют срока годности и никогда не сгорают.</p>
        </div>
      </section>



      <section className="main-condition-koncurs-require">
        <p className="main-condition-koncurs-require__title">Условия конкурса</p>

        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle">Сроки проведения</p>
          <p className="main-condition-koncurs-require__text">
            <span>Конкурс проводится каждую неделю с 0:00 понедельника до 00:00 воскресенья (МСК)</span>
            <span>Итоги конкурса подводятся в понедельник в 0:00 (МСК).</span>
          </p>
        </div>

        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle">Кто может принять участие</p>
          <p className="main-condition-koncurs-require__text">Любые работы, связанные из нашей пряжи.</p>
        </div>
        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle">Порядок приёма работ</p>
          <p className="main-condition-koncurs-require__text">
            <span>Работы принимаются в любое время дня в установленный промежуток дней для набора.</span>
            <span>После добавления работа проходит модерацию организаторами конкурса в течение 7 дней.</span>
            <span>Одобренные работы вступают в конкурс со следующей недели.</span>
          </p>
        </div>

        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle">Кто и как голосует</p>
          <p className="main-condition-koncurs-require__text">
            <span>Голосовать за работы могут все зарегистрированные пользователи сайта.</span>
            <span>Один пользователь может проголосовать за любое количество работ.</span>
            <span>За одну работу принимается только один голос.</span>
            <span>Голосовать можно только за работы других пользователей. Голоса за свою работу не учитываются.</span>
          </p>
        </div>

        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle">Как определяются победители</p>
          <p className="main-condition-koncurs-require__text">
            <span>Победителей конкурса система определяет автоматически.</span>
            <span>Побеждают по три работы в каждой категории: одежда, игрушки и аксессуары.</span>
            <span>Победителями становятся пользователи, чьи работы набрали больше всего лайков в каждой из
            категорий.</span>
          </p>
        </div>

        <div className="main-condition-koncurs-require__item">
          <p className="main-condition-koncurs-require__subtitle main-condition-koncurs-require__subtitle--active">Накрутка
            голосов запрещена</p>
          <p className="main-condition-koncurs-require__text">
          <span>Сомнительные голоса не будут учитываться при подсчете
            результатов конкурса.</span>
          </p>
        </div>
      </section>
    </section>

  );
};
