import React, {useEffect, useRef} from 'react';
import "./textarea.scss";
import {useDispatch, useSelector} from 'react-redux';
import {titleOfWork_action} from '../../../../actions/actions';
import $ from 'jquery';
import {showNoty} from '../../../../../../../helpers';


const TextArea = () => {
    //const updateTitle = useSelector(state=>state.backData.resources.work.update);
  let dispatch = useDispatch(),
      valueTitle = useSelector((state)=> state.titleOfWork);
    const id = useSelector(state=>state.idWorkForEmptyUrl);
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': app.token,
        },
    });
  const editTitle = (event)=>{
    event.stopPropagation();
      $.ajax({
          method:'put',
          url:`/api/works/${id}?title=${event.target.value}`,
          //data:{
          //    [updateTitle.params[0].key]:event.target.value,
          //},
          success:(e)=> {
              console.log(e);
              showNoty("success", e.success.message);
              dispatch(titleOfWork_action(e.success.work.title));

          },
          error:(error)=>{
              showNoty("error", error.responseJSON.message)
              console.log(error)
          }
      })
  }

useEffect(()=>{
 let textarea1 = document.getElementById("nameWork");
      textarea1.value = valueTitle;
},[valueTitle])


  //onChange={editTitle}
  return (
    <div>
        <textarea data-nolabel  onBlur={editTitle} defaultValue={valueTitle} placeholder={'Введите название работы'}  className="contest-work-step2-title"  name="textarea-name" id="nameWork"/>
    </div>
  );
};
export default TextArea;
