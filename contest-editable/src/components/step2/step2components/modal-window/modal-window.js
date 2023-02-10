//import React, {useEffect, useRef} from 'react';
//import './modal-window.scss';
//import SimpleDropZone from '../dropzone/dropzone';
//import {ReactSVG} from 'react-svg';
//import {cropImage_action, openModalDropzone_action, removeElementOfEditors_action} from '../../../../actions/actions';
//import {useDispatch, useSelector} from 'react-redux';
//import $ from 'jquery';
//import {showNoty} from '../../../../../../../helpers';
//
//
//export const ModalWindow = (props) => {
//    const modalDrop = useRef();
//    const dispatch = useDispatch();
//  const closeModal = ()=>{
//    modalDrop.current.classList.add("closed")
//    setTimeout(()=>{
//      dispatch(openModalDropzone_action())
//    },500);
//  }
//    const ckData = useSelector(state => state.editors);
//  const temporarilyImage = useSelector(state=>state.temporarilyImage)
//    //const updateElem = useSelector(state=>state.backData.resources.work.update_element);
//  return (
//    <div ref={modalDrop}  className={`modal__wrapper ${props.open ? 'open' : 'close'}`} style={{...props.style}}>
//      <div className="modal__body">
//        <div className="modal-content">
//          <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
//            <ReactSVG id="cross-icon" src={'/icons/contest-icons/closex.svg'}/>
//          </button>
//
//          <h3 className="modal-content__title">Фотография для конкурса</h3>
//          <ul className="modal-content__list-group">
//            <li className="modal-content__item-li">будет обрезана до квадратной формы.</li>
//            <li className="modal-content__item-li">выбранная область будет показываться на странице конкурса.</li>
//            <li className="modal-content__item-li">если изображение
//              ориентировано неправильно, фотографию можно перевернуть.
//            </li>
//          </ul>
//          <div className="dropzone-block">
//
//
//            <SimpleDropZone>
//              <div  className={"dropzone dz-clickable"}>
//              <div  className="dz-message dz-message-large">
//                <span>Выберите фотографию</span>
//                <strong>Будет обрезана до квадратной формы</strong>
//              </div>
//              </div>
//
//            </SimpleDropZone>
//            {/*<ReactSVG src={"/images/loader-catalog.svg"} className={"loaderImage"}/>*/}
//
//            <div className="dropzone-block-btns">
//              <button onClick={removeImageFunc} className="dropzone-block-btn" data-dismiss="modal" aria-label="Close">Отмена</button>
//              <button style={props.open ? {backgroundColor:"transparent", border:"2px solid #C83F51"}: {}} onClick={()=> {
//                dispatch(cropImage_action())
//                dispatch(openModalDropzone_action())
//              }} className="dropzone-block-btn dropzone-block-btn--active" data-image="continue">
//                {window.innerWidth >= 550 ? <span className={"save-change-text loadingInBtn"}>Сохранить и продолжить</span> : <span className={"save-change-text-mobile loadingInBtn"}>Добавить</span>}
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
//};
