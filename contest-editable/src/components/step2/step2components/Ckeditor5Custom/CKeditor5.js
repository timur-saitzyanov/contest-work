import React from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Ckeditor5.scss';
import {useDispatch, useSelector} from 'react-redux';
import {removeElementOfEditors_action, sendCkeditorData_action} from '../../../../actions/actions';
import $ from 'jquery';
import {showNoty} from '../../../../../../../helpers';

const CkeditorInitial = ({index}) => {
  const dispatch = useDispatch();
  const ckData = useSelector(state => state.editors);
    console.log(ckData);
    const removeCkEditor = function(){
        console.log(222222222222222);
        $.ajax({
            method:'DELETE',
            url:`/api/works/element/${ckData[index].id}/delete`,
            success:(e)=> {

                console.log(e);
                showNoty("success", e.message);
                console.log(index);
                dispatch(removeElementOfEditors_action(ckData[index].id));
            },
            error:(error)=>{
                showNoty("error", error.responseJSON.message)
                console.log(error)
            },
        });
    };
  return <div className="Ckeditor5Custom">
    <CKEditor
      editor={ClassicEditor}
      config={
        {
          toolbar: ['heading', 'bulletedList', 'numberedList'],
          heading: {
            options: [
              {model: 'heading1', view: 'h1', title: 'Заголовок', class: 'ck-heading_heading1'},
              {model: 'paragraph', title: 'Обычный текст', class: 'ck-heading_paragraph'},
            ],
          },
          shouldNotGroupWhenFull: true,
          language: 'ru',
          placeholder: "Для удаления редактора очистите поле и кликните(нажмите) вне области редактора"
        }
      }
      data={ckData[index].text}
      onReady={editor => {
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.classList.add('ckEditor__remove');
          btn.innerHTML = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.7" cx="15" cy="15" r="14.5" fill="#EDEDED" stroke="black"/>
            <path d="M10 10L20 20" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M20 10L10 20" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>`;
        btn.onclick = removeCkEditor;
        const dropDownEditor = editor.sourceElement.nextElementSibling.querySelector('.ck.ck-dropdown.ck-heading-dropdown');
        dropDownEditor.classList.remove('ck-dropdown', 'ck-heading-dropdown');
        dropDownEditor.children[1].classList.remove('ck-dropdown__panel', 'ck-dropdown__panel_se');
          editor.sourceElement.nextElementSibling.querySelector('.ck.ck-sticky-panel__content').insertAdjacentElement(
              'beforeend', btn)
        const editors = document.querySelectorAll('.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline');
        editors[editors.length - 1].focus();
      }}
      onChange={(event, editor) => {

      }}
      onBlur={(event, editor) => {

        editor.sourceElement.nextElementSibling.querySelector('.ck.ck-toolbar.ck-toolbar_grouping').style.visibility = 'hidden';
        if (ckData[index].text !== editor.getData()) {
            if (editor.getData().length > 0){
                $.ajax({
                    method:'put',
                    url:`/api/works/element/update?work_element_id=${+ckData[index].id}&text=${editor.getData() ?? ''}&update_type=text`,
                    success:(e)=> {
                        console.log(e, 'e');
                        showNoty("success", e.message);
                        dispatch(sendCkeditorData_action(editor.getData() ?? '', +ckData[index].id, index));
                    },
                    error:(error)=>{
                        //showNoty("error", error.responseJSON.message)
                        console.log(error)
                    },
                });
            }else {
                removeCkEditor();
            }
        }
      }}
      onFocus={(event, editor) => {
        editor.sourceElement.nextElementSibling.querySelector('.ck.ck-toolbar.ck-toolbar_grouping').style.visibility = 'visible';
      }}
    />
  </div>;
};
export const CkeditorInitialMemo = React.memo(CkeditorInitial)
