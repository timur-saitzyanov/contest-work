import React from 'react';
import "./main-btn.scss";
import {useDispatch} from 'react-redux';
import {setCurrentStep2_action, step1Ready_action} from '../../../../actions/actions';
import {Link, useHistory} from 'react-router-dom';

const MainBtn = ({isActive})=> {
    const history = useHistory();
  let pathTo = "";
  const dispatch = useDispatch();

  const goToStep2 = function(e){
      e.preventDefault();
      if (isActive){
          dispatch(setCurrentStep2_action);
          dispatch(step1Ready_action());
          dispatch(setCurrentStep2_action());
          history.push("/step2");
      }
      return null
  }

  return (
    <Link onClick={goToStep2} to={pathTo} className={isActive ? "contest-work-initial-next-step active" : "contest-work-initial-next-step"}>
      <span className="next-step-text">Продолжить</span>
    </Link>
  )
}
export default  MainBtn;
