import React, {useEffect} from 'react';
import "./successModal.scss";
import {ReactSVG} from 'react-svg';
import {createPortal} from 'react-dom';
import {useDispatch} from 'react-redux';
import {toggleSuccessModal_action} from '../../../../actions/actions';

export const SuccessModal = React.memo(({successModalStatus})=>{
    const dispatch = useDispatch();
    const closeSuccessModal = function(e){
        if (e.type === 'keydown' && e.keyCode === 27){
            document.querySelector('.success-modal').classList.add('close');
        }else if (e.type === 'click'){
            document.querySelector('.success-modal').classList.add('close');
        }
    }
    const getAnimationStatus = function(e){
        if (e.target.classList.contains('close')){
            dispatch(toggleSuccessModal_action());
        }
    }
    useEffect(()=>{
        document.body.addEventListener('keydown',closeSuccessModal)
    },[])
  if (!successModalStatus) return null;
  return (
    createPortal(<div onAnimationEnd={getAnimationStatus} onClick={closeSuccessModal} className={"blackout"}>
      <section  className="success-modal">
        <ReactSVG className={"closeModal"}  src={"/icons/contest-icons/smallX.svg"} onClick={closeSuccessModal}/>
        <div className="success-modal__content">
          <div className="success-modal__top">
            <ReactSVG className={"sberIcon"} src={"/icons/contest-icons/sber.svg"} wrapper={"span"}/>
            <p className={"success-modal__title"}>Конкурсная работа отправлена</p>
          </div>
          <p className={"success-modal__text"}>После проверки модерации ваша работа будет опубликована</p>
          <button className="success-modal__btn" onClick={closeSuccessModal}>
            <span className={"btn-text"}>Готово</span>
          </button>

        </div>
      </section>

    </div>,document.querySelector('html body'))

  )
});
