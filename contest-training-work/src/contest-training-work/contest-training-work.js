import React from 'react';
import './contest-training-work.scss';
import {data} from './data';
import {ReactSVG} from 'react-svg';
import {ResponsiveSlickSlider} from './components/slick-slider-react/slick-slider-react';
import {Slide} from './components/slide/slide';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const ContestTrainingWork = () => {

  return (
    <>
      <main className="main-training-contest-work">

        <a href="/contest" className={'link-go-contest'}>
          <ReactSVG wrapper={'span'} src={'/icons/contest-icons/arrow-left.svg'}/>

          <span className="main-training-contest-work-left-side__link-text">Вернуться к конкурсным работам</span>
        </a>

        <article className="main-training-contest-work-title">
          <p className="main-training-contest-work-center-title">
            Обучающая конкурсная работа: Детский джемпер для сынули
          </p>
          <div className="right-side-start-complete">
            <ReactSVG className={"t-bold"} wrapper={'span'} src={'/icons/contest-icons/t-bold.svg'}/>

            <p className="right-side-text">Начните заполнение своей конкурсной работы с заполнения названия работы. Назовите
              работу
              так, чтобы зрители сразу поняли
              о что вы связали и по какому случаю.</p>
          </div>
        </article>
        <article className="main-training-contest-work-undertitle">
          <p className="main-training-contest-work-center-text main-training-contest-work-center-undertitle">
            Уже совсем скоро даступит Новый год, один из любимейших праздников! Как же приятно дарить и получать подарки!
            А ещё одно приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое... И вот я начала
            подготовку
            к оформлению к новому году своего дома✨ Самый сказочный для меня персонаж Нового года не Дед Мороз и даже не
            Снегурочка,
            а
            Оленёнок! Вот такой сказочный оленёнок у меня получился!
          </p>
          <div className="right-side-after-descrip">
            <ReactSVG className={"t-bold"} wrapper={'span'} src={'/icons/contest-icons/t-bold.svg'}/>
            <p className="right-side-text">Далее начните описание своей работы.Например, в данном абзаце можно описать общие
              сведения
              о работе.</p>
          </div>
        </article>

        <section className="main-training-contest-work-first-block-photo">
          <div className="main-training-contest-work-left-side__text-photo">
            <ReactSVG className={"camera"} wrapper={'span'} src={'/icons/contest-icons/camera.svg'}/>
            <p className="main-training-contest-work-left-side__first main-training-contest-work-left-side-all-text">Первая
              фотография
              будет отражаться на главной конкурсной странице, поэтому мы рекомендуем на ней расположить изделие в
              полном виде.</p>
            <p className="main-training-contest-work-left-side__second main-training-contest-work-left-side-all-text">Не
              забывайте,
              что фотографии будут обрезаны до квадратного формата. Учитывайте это во время того, как
              делаете снимки для конкурса.</p>
          </div>
          <div className="main-training-contest-work-center-img">
            <picture>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-cQtxSC6OYNt574x575.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <img src={data.images[0].image1} className="goods__photo" alt=""/>
            </picture>

          </div>
        </section>

        <article className="main-training-contest-work-after-we-can-go">
          <p className="main-training-contest-work-center-text main-training-contest-work-center-second-text">
            Уже совсем скоро наступит Новый год, один из любимейших праздников! Как же приятно дарить и получать подарки!
            А ещё одно
            приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое...
          </p>
          <div className="right-side-go-notice">
            <ReactSVG className={"thin"} wrapper={'span'} src={'/icons/contest-icons/thin.svg'}/>
            <p className="right-side-text">Далее можно перейти к каким-то заметкам, особенностям вязки или более подборным
              описаниям.</p>
          </div>
        </article>

        <section className="main-training-contest-work-second-block-photo">
          <div className="main-training-contest-work-left-side__arrow-block">
            <div className="arrow-block-images">
              <ReactSVG className={"arrow-block-image__arrow"} wrapper={'span'} src={'/icons/contest-icons/arrow-image.svg'}/>
              <ReactSVG className={"camera"} wrapper={'span'} src={'/icons/contest-icons/camera.svg'}/>

            </div>
            <p className="arrow-block-text main-training-contest-work-left-side-all-text">
              Также зрителям будет интересно рассмотреть изделие с разных сторон и ракурсов.
            </p>

          </div>

            <div className="main-training-contest-work-center-img">
              <picture>
                <source media="(max-width: px)"
                        srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-cQtxSC6OYNt574x575.jpg"/>
                <source media="(max-width: px)"
                        srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
                <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
                <source media="(max-width: px)"
                        srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
                <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
                <source media="(max-width: px)"
                        srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
                <img src={data.images[1].image1} className="goods__photo" alt=""/>
              </picture>

            </div>
        </section>

        <section className="main-training-contest-work-fourth-block-photo">
          <p className="main-training-contest-work-center-text main-training-contest-work-center-third-text">
            Уже совсем скоро наступит Новый год, один из любимейших праздников! Как же приятно дарить и получать
            подарки!
            А ещё
            одно
            приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое...
          </p>
          <div className="main-training-contest-work-center-img main-training-contest-work-center-img--none-left">
            <picture>
              {/*//<!-- <source media="(max-width: 700px)"*/}
              {/*//  srcset="../resources/images/jpeg/imgonline-com-ua-Resize-cQtxSC6OYNt574x575.jpg">*/}
              {/*//<source media="(max-width: 600px)"*/}
              {/*//  srcset="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg">*/}
              {/*//<source media="(max-width: 500px)" srcset="../resources/images/jpeg/1_0.jpg">*/}
              {/*//<source media="(max-width: 400px)" -->*/}
              {/*//<!-- srcset="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"> -->*/}
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <img src={data.images[2].image1} className="goods__photo" alt=""/>
            </picture>
          </div>

          <p className="main-training-contest-work-center-text main-training-contest-work-center-third-text">
            Уже совсем скоро наступит Новый год, один из любимейших праздников! Как же приятно дарить и получать подарки!
            А ещё
            одно
            приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое...
          </p>
          <div className="main-training-contest-work-center-img main-training-contest-work-center-img--none-left">
            <picture>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-cQtxSC6OYNt574x575.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <img src={data.images[3].image1} className="goods__photo" alt=""/>
            </picture>
          </div>

          <section className="scheme">
            <p className="scheme-label">Схема детского джемпера</p>
            <ol className={'scheme-ul'}>
              <li className={'scheme-li'}>Уже совсем скоро наступит Новый год, один из любимейших праздников!</li>
              <li className={'scheme-li'}>Как же приятно дарить и получать подарки!</li>
              <li className={'scheme-li'}>А ещё одно приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое...</li>
            </ol>
          </section>

          <div className="main-training-contest-work-center-img main-training-contest-work-center-img--none-left">
            <picture>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-cQtxSC6OYNt574x575.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <source media="(max-width: px)" srcSet="../resources/images/jpeg/1_0.jpg"/>
              <source media="(max-width: px)"
                      srcSet="../resources/images/jpeg/imgonline-com-ua-Resize-TKYyUXpgAvLGeta274x275.jpg"/>
              <img src={data.images[4].image1} className="goods__photo" alt=""/>
            </picture>
          </div>

          <ul className={'ul-subphoto'}>
            <li className={'ul-li-subphoto'}>Как же приятно дарить и получать подарки!</li>
            <li className={'ul-li-subphoto'}>А ещё одно приятное занятие это украшать свой дом, тут фантазия тебе может подсказать многое...</li>
            <li className={'ul-li-subphoto'}>И вот я начала подготовку к оформлению к новому году своего дома✨</li>
          </ul>

          <p className="social-title">Ссылка на социальную сеть</p>
          <a href="https://www.vk.com/dombovskaya_69/" className="social-link">https://www.vk.com/dombovskaya_69/</a>

          <hr className="main-training-contest-work-center-add-work-under-btn"/>
          <p className="main-training-contest-work-center-add-work-use-yarn">
            В данной конкурсной работе использовали пряжу
          </p>

          <div className={"full-slider"}>
            {
              window.inner <=480 ?
                <PerfectScrollbar>
                  <div style={{display:"flex", marginRight: "10px"}}>
                    {
                      data.yarnData.map((slide, index) =>
                        <Slide slide={slide} key={index}/>,
                      )}
                  </div>
                </PerfectScrollbar>

              :
              <ResponsiveSlickSlider>
                {data.yarnData.map((slide, index) =>
                  <Slide slide={slide} key={index}/>,
                )}
              </ResponsiveSlickSlider>
            }
          </div>

          <a href="/profile/works" className="main-training-contest-work-center-add-work-btn">
            <span>Добавить новую работу</span></a>
        </section>

      </main>

    </>
  );
};
