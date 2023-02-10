import React, {useEffect, useRef} from 'react';
import "./unSelectYarn.scss";
import {animateEnd_action, elemSelected_action, filterArr_action, removedElement_action} from '../../../../actions/actions';
import {useDispatch} from 'react-redux';
import GetImageToUri from '../../../../../../../GetImageToUri';

export const UnSelectYarn = ({el})=>{

  const dispatch = useDispatch()
  const unSelectYarn = useRef();

  function chooseItem(e){
    window.block = true
    let id = e.target.id;
    dispatch(elemSelected_action(id))
    return window.requestAnimationFrame(function(){
        setTimeout(()=>{
          dispatch(filterArr_action(id));
          dispatch(animateEnd_action(id))
          window.block = false
        },200)
    })
 }
 function transition (){
    return window.requestAnimationFrame(()=>{
      return setTimeout(()=>{
        dispatch(removedElement_action(el.id))
      },200)
    })
 }

  useEffect(()=>{
    if (el.remove){
    unSelectYarn.current.classList.add("active");
    }
  },[el.selected])
  return (
    <div onTransitionEnd={transition} ref={unSelectYarn} className={el?.selected ? "scale" : el?.remove ? 'anim2' : ""}>
      <input  onChange={chooseItem} id={el?.id} className={'custom-checkbox'} type="checkbox" checked={el?.selected} value={el?.name}/>
      <label key={el?.id} className={'yarn-item'} htmlFor={el?.id}>
        <div  className={'check-yarn-wrapper'}>
         <GetImageToUri classimg="yarn-image-modal" image={el.image} params={`resize/50-50`}/>
          <p className={"yarn-text-info"}>{el?.name}</p>
        </div>
      </label>
    </div>
  )
}
