import React from 'react';
import "./btn-add-ckeditor.scss";
import {useDispatch, useSelector} from 'react-redux';
import {addCkeditor_action} from '../../../../actions/actions';
import {ReactSVG} from 'react-svg';
import $ from 'jquery';
import {showNoty} from '../../../../../../../helpers';

export const BtnAddCkeditor = ()=>{
  const dispatch = useDispatch();
    //const addElem = useSelector(state=>state.backData.resources.work.add_element);
    const workId = useSelector(state=>state.idWorkForEmptyUrl)
  function addEditor() {
          $.ajax({
              method:'post',
              url:`/api/works/element/store`,
              data:{
                  'work_id' : +workId,
                  'type':'text',
                  'text':'',
                  // поле text раньше было не нужно т к только создали редактор, но текст не добавляли
              },
              success:(e)=> {

                  console.log(e);
                  showNoty("success", 'Редактор создан');
                  dispatch(addCkeditor_action(e.success));
              },
              error:(error)=>{
                  showNoty("error", error.responseJSON.message)
                  console.log(error)
              },
          });
  }

  return (
    <button className={'add-ckeditor'} onClick={addEditor}>
      <ReactSVG wrapper={"span"} src={"/icons/contest-icons/ck-icon.svg"}/>
    </button>
  )
}
