import React from 'react';
import "./lk-tooltip.scss";
import {ReactSVG} from 'react-svg';
import {removeCard_action, setTrueAfterDeletingWork_action} from '../../../actions/actions';
import {useDispatch} from 'react-redux';
import $ from 'jquery';
import {showNoty} from '../../../../../../helpers';


export const LkTooltip = ({id,edited})=>{
const dispatch = useDispatch();
  function activeTooltip(e){
    let elem = e.currentTarget.nextElementSibling;
    let allTooltip = document.querySelectorAll(".tooltip_lk-content");

    if (window.getComputedStyle(elem, null).visibility === "hidden"){
      allTooltip.forEach(el=>el.style.visibility = "hidden");
      elem.style.visibility = "visible";
    }else {
      allTooltip.forEach(el=>el.style.visibility = "hidden");
    }
  }
  function removeCard(event){
      const id = event.currentTarget.id;
      $.ajax({
          method:'DELETE',
          url:`/api/works/${id}/delete`,
          success:(e)=> {
              dispatch(removeCard_action(id));
              dispatch(setTrueAfterDeletingWork_action())
          },
          error:(error)=>{
              showNoty("error", error.responseJSON.message)
              console.log(error)
          },
      });

    let allTooltip = document.querySelectorAll(".tooltip_lk-content");
    console.log(allTooltip);
    allTooltip.forEach(el=>el.style.visibility = "hidden");
  }

  function editCard(e) {
    console.log(e.currentTarget.id);
    let allTooltip = document.querySelectorAll(".tooltip_lk-content");
    allTooltip.forEach(el=>el.style.visibility = "hidden");
  }

  return (
    <div  className="tooltip_lk">
      <button onClick={activeTooltip} className={'edit_card'}>
        <span className="edit_card_dots"/>
        <span className="edit_card_dots"/>
        <span className="edit_card_dots"/>
      </button>
      {
        edited ?
          <div className="tooltip_lk-content">
          <div className="tooltip_lk-content__wrap">
            <div id={id} onClick={removeCard} className={'tooltip_lk-content_btn'}>
              <ReactSVG className={'sd'} wrapper={'span'} src={'/icons/contest-icons/tooltipRemove.svg'}/>
              <span  className={'tooltip_lk-content_text'}>Удалить</span>
            </div>

            <a href={`/profile/works/update/${id}`} id={id} onClick={editCard} className={'tooltip_lk-content_btn'}>
              <ReactSVG className={'sd'} wrapper={'span'} src={'/icons/contest-icons/tooltipEdit.svg'}/>
              <span  className={'tooltip_lk-content_text'}>Редактировать</span>
            </a>

          </div>
        </div>
          :
          <div className="tooltip_lk-content">
            <div className="tooltip_lk-content__wrap" style={{top:"-98px"}}>
              <div id={id} onClick={removeCard} className={'tooltip_lk-content_btn'}>
                <ReactSVG className={'sd'} wrapper={'span'} src={'/icons/contest-icons/tooltipRemove.svg'}/>
                <span  className={'tooltip_lk-content_text'}>Удалить</span>
              </div>
            </div>
          </div>
      }
    </div>

  )
}
