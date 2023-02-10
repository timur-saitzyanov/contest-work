import React, {useEffect, useRef, useState} from 'react';
import "./yarnOnPageElement.scss";
import {ReactSVG} from 'react-svg';
import {useDispatch} from 'react-redux';
import {deleteYarnOnPage_action, firstTimesInChoosedYarn_action, takeOffAnimate_action} from '../../../../actions/actions';
import GetImageToUri from '../../../../../../../GetImageToUri';


export const YarnOnPageElement = ({el, iconRemoved})=>{
    const myRef = useRef();
    const dispatch = useDispatch();
    const [cl, setCl] = useState("yarn-on-page-item")

    function deleteYarn(e) {
      myRef.current.classList.add("aft");
     const id = e.currentTarget.id;
      setTimeout(()=>{
        dispatch(deleteYarnOnPage_action(id));
      },200)
    }
    useEffect(()=>{
        if (el?.animate){
           setCl("yarn-on-page-item anim");
           setTimeout(()=>{
             dispatch(firstTimesInChoosedYarn_action(el.id))
             dispatch(takeOffAnimate_action(el.id))
           },200)
        }
    },[el.animate])

  return (
          <div ref={myRef} className={el?.finishAnimate ? "yarn-on-page-item anim" : cl}>
              <GetImageToUri classimg={'yarn-img'} image={el.image} params={`resize/50-50`}/>
              <p className={'yarn-text-info'}>{el?.name}</p>
            {!iconRemoved ?
              (<button id={el?.id} onClick={deleteYarn} className={'deleteYarn'}>
              <ReactSVG src={'/icons/contest-icons/delYarn.svg'} wrapper={'span'}/>
            </button>)
              : null}

          </div>
    )
}
