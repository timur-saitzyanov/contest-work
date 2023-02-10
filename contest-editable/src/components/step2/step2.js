import React from 'react';
import './step2.scss';
import {CkeditorInitialMemo} from './step2components/Ckeditor5Custom/CKeditor5';
import TextArea from './step2components/textarea/textarea';
import {useSelector} from 'react-redux';
import {BtnAddCkeditor} from './step2components/btn-add-ckeditor/btn-add-ckeditor';
import {AdviceStep2} from './step2components/advice-step2/advice-step2';

import {BtnAddImageDropzone} from './step2components/BtnAddImageDropzone/BtnAddImageDropzone';
import {MobileModalAdvice} from './step2components/mobile-modal-advice/mobile-modal-advice';
import {ReactSVG} from 'react-svg';
import BtnAdviceMobileStep3 from '../step3/step3components/btn-advice-mobile-step3/btn-advice-mobile-step3';
import {ImageWithEditing} from './step2components/imageWithEditing/imageWithEditing';

import {ReactModalApp} from './step2components/ReactModalApp/ReactModalApp';
import {Link} from 'react-router-dom';


const Step2 = () => {
    const conditionToNext = useSelector(state=>({
        titleOfWork:state.titleOfWork,
        hasImage:state.editors?.find(el=>el.type === 'image'),
    }));
  let editorsArray = useSelector((state) => state.editors),
      openModalDropzone = useSelector(state => state.modalDropzone);

  if (openModalDropzone) {
    document.body.style.overflow = 'hidden';
  } else if (openModalDropzone === false) {
    document.body.style.overflow = 'visible';
  }
  const renderIf = (el, index) => {
    if (el.type === 'text') {
      return <CkeditorInitialMemo key={el.id}  id={el.id} index={index}/>;
    }
    else if (el.type === 'image') {

      return  <ImageWithEditing key={el.id} id={el.id} index={index} srcUrl={el.image}/>
    }
    return null;
  };
    return (
    <div>
      <div className={'step2-App'}>

        <MobileModalAdvice/>
        <BtnAdviceMobileStep3/>
        <section className={'contest-work-initial__container contest-work-step-2'}>

          <div className="contest-work-step-2-blocks contest-work-step-2-blocks--step-2">

            <div className={'main-editable'}>
              <TextArea/>
              {
                editorsArray.map((el, index) =>
                  renderIf(el, index),
                )
              }
              <BtnAddImageDropzone/>

              <BtnAddCkeditor/>

              <ReactModalApp/>



              {/*<ModalPortal open={openModalDropzone}>*/}
              {/*  <ModalWindow open={openModalDropzone}>*/}

              {/*  </ModalWindow>*/}
              {/*</ModalPortal>*/}


            </div>
            <div className="steps">
              <div className="block-step block-step-2">
                <ReactSVG wrapper={"span"} src={"/icons/contest-icons/svg-step-right.svg"} className={"svg-step-right"}/>
                <ReactSVG wrapper={"span"} src={"/icons/contest-icons/svg-active-tablet.svg"} className="svg-active-tablet"/>

                <div className="step-text-number contest-work-initial__text-step1 step2-text-number">
                  <p className="step-text-number__title step-text-number__title--active">Шаг 2</p>
                  <p className="step-text-number__text">Заполните данные конкурсной работы: придумайте название, опишите этапы
                    вязания изделия и покажите работу со всех наиболее интересных ракурсов. </p>
                </div>
              </div>

              <div className="block-step-right block-step-right-third block-step-right--step-2">
                <Link to={conditionToNext.titleOfWork?.length > 0 && conditionToNext.hasImage ? '/step3' : '/step2'} className={`contest-work-initial-next-step second-step-main-btn ${conditionToNext.titleOfWork?.length > 0 && conditionToNext.hasImage ? 'active' : ''}`}><span className="next-step-text next-step-text--second-step">Продолжить</span></Link>
                <div className="step-text-number contest-work-initial__text-step2 step-text-number--step2">
                  <p className="step-text-number__title step-text-number__title--second">Шаг 3
                    <ReactSVG wrapper={"span"} src={"/icons/contest-icons/svg-step.svg"} className="grey-svg-step grey-svg-step--second-step"/>
                    <ReactSVG wrapper={"span"} src={"/icons/contest-icons/mobile.svg"} className={'mobile-svg'}/>
                  </p>
                  <p className="step-text-number__text">Заполните товары, из которых связано ваше конкурсное изделие</p>
                </div>

              </div>

            </div>

          </div>

        </section>
        <AdviceStep2/>
      </div>

    </div>

  );
};
export const Step2Memo = React.memo(Step2);
