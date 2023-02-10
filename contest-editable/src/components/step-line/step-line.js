import React from 'react';
import './step-line.scss';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {useSelector} from 'react-redux';

const StepLine = () => {
  const dataState = useSelector(state => {
    return {
      step1Initial: state.step1,
      step2Initial: state.step2,
      step3Initial: state.step3,
      currentStep1IsReady: state.step1Ready,
      currentStep2IsReady: state.step2Ready,
      currentStep3IsReady: state.step3Ready,
        titleOfWork:state.titleOfWork,
        hasImage:state.editors?.find(el=>el.type === 'image'),
        hasYarnsOnPageArr:state.yarnsOnPageArr,
        currentWork:state.currentWork,
    };
  });
  return (
    <div className={'stepLines'}>
      <div className={'step'}>
        <Link to="/" className={ dataState.currentStep1IsReady ? 'initial textStep passed' : (dataState.step1Initial) ? 'initial textStep' :'initial'}>
          Шаг 1
        </Link>
        <span className={'step-img'}>
          {dataState.currentStep1IsReady ?
            <ReactSVG className={'icons-step'} src={'/icons/contest-icons/active-check-passed.svg'}/>
            : dataState.step1Initial ?
              <ReactSVG style={{marginTop: '2px'}} src={'/icons/contest-icons/active-step.svg'}/>
              : <ReactSVG style={{marginTop: '2px'}} src={'/icons/contest-icons/inactive-step.svg'}/>
          }
          </span>
        <div className={dataState.currentStep1IsReady ? 'line line-passed' : 'line'}/>

      </div>
      <div className={'step'}>
        <Link  to={dataState.currentWork ? "/step2" : ''} className={dataState.titleOfWork?.length > 0 && dataState.hasImage ? 'initial textStep passed' :(dataState.step2Initial) ? 'initial textStep' :  'initial'}>
          Шаг 2
        </Link>
        <span className={'step-img'}>
          {dataState.titleOfWork?.length > 0 && dataState.hasImage  ?
            <ReactSVG className={'icons-step'} src={'/icons/contest-icons/active-check-passed.svg'}/>
            : dataState.step2Initial ?
              <ReactSVG style={{marginTop: '2px'}} src={'/icons/contest-icons/active-step.svg'}/>
              : <ReactSVG style={{marginTop: '4px'}} src={'/icons/contest-icons/inactive-step.svg'}/>
          }
          </span>
      </div>

      <div className={'step'}>
        <Link to={dataState.currentWork ? "/step3" : ''} className={dataState.hasYarnsOnPageArr?.length > 0  ? 'initial textStep passed' : dataState.titleOfWork?.length > 0 && dataState.hasImage  ? 'initial textStep' :  'initial'}>
          Шаг 3
        </Link>
        <span className={'step-img'}>
          {dataState.hasYarnsOnPageArr?.length > 0 ?
            <ReactSVG className={'icons-step'} src={'/icons/contest-icons/active-check-passed.svg'}/>
            : dataState.titleOfWork?.length > 0 && dataState.hasImage   ?
              <ReactSVG src={'/icons/contest-icons/active-step.svg'}/>
              : <ReactSVG style={{marginTop: '4px'}} src={'/icons/contest-icons/inactive-step.svg'}/>
          }
          </span>
        <div className={dataState.titleOfWork?.length > 0 && dataState.hasImage ? 'last-line last-line-passed' : 'last-line'}/>

      </div>
    </div>
  );
};
export default StepLine;
