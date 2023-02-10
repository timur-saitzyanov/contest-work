import React, {useState} from 'react';
import './step3.scss';
import BlockStep3 from './step3components/blockStep3/blockStep3';
import InputForSocialLink from './step3components/input-for-social-link/input-for-social-link';
import ChooseDateOfPublic from './step3components/choose-date-of-public/choose-date-of-public';
import StepAdviceStep3 from './step3components/step-advice-step3/step-advice-step3';
import BtnAdviceMobileStep3 from './step3components/btn-advice-mobile-step3/btn-advice-mobile-step3';
import {useDispatch, useSelector} from 'react-redux';
import {WorkMiddlePlaceMemo} from './step3components/workMiddlePlace/workMiddlePlace';
import {MobileModalAdvice} from '../step2/step2components/mobile-modal-advice/mobile-modal-advice';
import {YarnOnPageElement} from './step3components/yarnOnPageElement/yarnOnPageElement';
import {Margin} from '../../../../contest-conditions/src/margin/margin';
import {SuccessModal} from './step3components/successModal/successModal';
import {PreviewWorkInModal} from './step3components/previewWorkInModal/previewWorkInModal';
import {previewWorkLoaded_action, togglePreviewWork_action, toggleSuccessModal_action} from '../../actions/actions';
import $ from 'jquery';
import {showNoty} from '../../../../../helpers';

const Step3 = () => {
    const [previewWork, setPreviewWork] = useState({});
    const successStatus = useSelector(state=>state.successModalStatus);
    const dispatch = useDispatch();
    const openModal = useSelector(state => state.modalYarn);
    let arrOnPage = useSelector(state=>state.yarnsOnPageArr);
    const id = useSelector(state=>state.idWorkForEmptyUrl);
    const disabled = !(previewWork?.current_product_mods?.length > 0 && previewWork?.title !== null && previewWork?.title.length > 0 && previewWork?.elements?.find(el=>el.type === 'image') )
    const togglePreview = function(e){
      e.preventDefault();
      const backArr = [...arrOnPage];
      const arrMod = [];
      backArr.forEach((el)=>{
        arrMod.push([`&mods[]=${el.product_mod_id}`])
      });
      const strMods = arrMod.join('');
      $.ajax({
        method:'put',
        url:`/api/works/${id}?${strMods}`,
        success:(e)=> {
            showNoty("success", 'пряжа');
        },
        error:(error)=>{
            showNoty("error", error.responseJSON.message)
            console.log(error)
        }
      }).then(()=>{
          dispatch(togglePreviewWork_action());
          $.ajax({
              method:`get`,
              url:`/api/works/show/${id}`,
              success:(e)=> {
                  showNoty("success", e.success.message);
                  setPreviewWork(e.success);
                  dispatch(previewWorkLoaded_action(true));
              },
              error:(error)=>{
                  showNoty("error", error.responseJSON.message)
                  console.log(error);
              },
          })
    });
    }
    const publicWork = function(e){
        $.ajax({
            method:'put',
            url:`/api/works/${id}?draft=0`,
            success:(e)=> {
                dispatch(toggleSuccessModal_action());
                setTimeout(()=>{
                    location.href="/profile/works";
                },3000);
            },
            error:(error)=>{
                showNoty("error", error.responseJSON.message)
                console.log(error)
            }
        })
    }
  return (
    <div>
      <section className={'contest-work-initial__container'}>
        <BtnAdviceMobileStep3/>
        <div className={'wrap-main-step3'}>
          <div className={'left-block-step3'}>

            <h1 className="choose-of-yarn">Укажите из какой пряжи выполнена конкурсная работа</h1>

            <Margin mb={0} mt={arrOnPage.length > 0 ? 25 : 0} mr={10}>
              {window.innerWidth <= 1081 ?
                arrOnPage?.map(el=>
                  <YarnOnPageElement key={el.id} iconRemoved={true} el={el}/>
                )
                : null
              }
            </Margin>


            <WorkMiddlePlaceMemo modal={openModal}/>

            <p className="text-subtitle">
              Добавьте ссылку на вашу социальную сеть
            </p>
            <InputForSocialLink/>
            <ChooseDateOfPublic/>

          </div>
          <div className={'right-block-step3'}>
            <BlockStep3/>
          </div>
          <a onClick={togglePreview} href="#" className="contest-work-initial-next-step second-step-main-btn third-step-main-btn"><span className="next-step-text next-step-text--second-step">Опубликовать</span></a>

        </div>
      </section>
      <div className={'center-block'}>
        <StepAdviceStep3/>
      </div>
        <PreviewWorkInModal disabled={disabled} publicWorkFunc={publicWork} btnBottom={true} work={previewWork}>
          <div className={'step3preview'}>
              <span className='step3preview__title'>Предварительный просмотр</span>
              <button onClick={publicWork} disabled={disabled} className={disabled ? 'step3preview__btnPreviewTop disabled':'step3preview__btnPreviewTop'}>Опубликовать</button>
          </div>    
        </PreviewWorkInModal>
      <SuccessModal successModalStatus={successStatus}/>
      <MobileModalAdvice/>

    </div>

  );
};
export const Step3Memo = React.memo(Step3);
