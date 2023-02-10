import React from 'react';
import './btn-advice-mobile-step3.scss';
import {ReactSVG} from 'react-svg';
import {adviceMobileToggle_action} from '../../../../actions/actions';
import {useDispatch} from 'react-redux';

const BtnAdviceMobileStep3 = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={()=>dispatch(adviceMobileToggle_action())} className={'btn-advice-mobile'}>

       <ReactSVG wrapper={"span"} className={'btn-advice-mobile__icon'} src={"/icons/contest-icons/advice-mobile.svg"}/>
      <span className="btn-advice-mobile__title">Советы по оформлению конкурсной работы</span>
      <ReactSVG wrapper={'span'} className={'btn-advice-mobile__icon--arrow'} src={'/icons/contest-icons/arrow-mobile.svg'}/>

    </button>
  );
};
export default BtnAdviceMobileStep3;
