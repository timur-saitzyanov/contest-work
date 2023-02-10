import React, {useCallback, useEffect, useState} from 'react';
import styles from "./ReactModalApp.module.css";
import "../modal-window/modal-window.scss";
import {
    addImageElement_action, changeCropData_action,
    clearTemporarilyImage_action,
    cropImage_action,
    openModalDropzone_action,
    sendCkeditorData_action,
    setCropData_action,
    updateImageElement_action,
} from '../../../../actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import Modal from 'react-modal';
import {ReactSVG} from 'react-svg';
import SimpleDropZone from '../dropzone/dropzone';
import $ from 'jquery';
import {getImageToUri, showNoty} from '../../../../../../../helpers';
import {ImageWithCropper} from '../ImageWithCropper/ImageWithCropper';
import {addImageElement, changeCropData, updateImageElement} from '../../../../types/types';

export const ReactModalApp = ({children})=>{
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': app.token,
        },
    });
    const temporarilyImage = useSelector(state=>state.temporarilyImage)
    const dispatch = useDispatch();
    const changeCroppedImage = useSelector(state=>state.changeCroppedImage);
    let openModalDropzone = useSelector(state => state.modalDropzone);
    const loading = useSelector(state=>state.firstSendingImage);
    const ckData = useSelector(state => state.editors);
    const statusOfCropped = useSelector(state=> state.statusOfCropped);
    const cropData = useSelector(state=> state.cropData);
  useEffect(()=>{
    Modal.setAppElement('body');

  },[]);
    //console.log(cropData, 'cropData');
    //if (statusOfCropped && cropData){
    //    console.log('ajax', statusOfCropped);
    //    $.ajax({
    //        method:'put',
    //        url:`/api/works/element/update?work_element_id=${temporarilyImage[0].id}&update_type=image&image[width]=${cropData.nWidth}&image[height]=${cropData.nHeight}&selection[width]=${cropData.selWidth}&selection[x]=${cropData.x}&selection[y]=200${cropData.y}`,
    //        //data:{
    //        //    //[updateElem.params[0].key]:+ckData[ckData.length-1].id,
    //        //    //[updateElem.params[1].key]:'image',
    //        //    'image[width]':806,
    //        //    'image[height]':700,
    //        //    'selection[width]':247,
    //        //    'selection[x]':149,
    //        //    'selection[y]':52,
    //        //},
    //        success:(e)=> {
    //            console.log(e);
    //            showNoty("success", 'Изображение обновлено');
    //            console.log(getImageToUri(e.success.image[0], `crop/100-0`))
    //            dispatch(sendCkeditorData_action(e.success))
    //        },
    //        error:(error)=>{
    //            //showNoty("error", error.responseJSON.message)
    //            console.log(error)
    //        },
    //    });
    //}
  function handleAfterOpenFunc(){
    $(`.${styles['modal__contents']}`).addClass(styles['active']);
    $(`.${styles['overlay__contents']}`).addClass(styles['active']);
    document.querySelector(".ReactModal__Overlay").classList.add("o");
  }
  function handleRequestCloseFunc(e) {
      //console.log(temporarilyImage.length);
      //if (temporarilyImage.length > 0 && statusOfCropped){
      //    console.log('removeImage'
      //    );
          //$.ajax({
          //    method:'DELETE',
          //    url:`/api/works/element/${temporarilyImage[0].id}/delete`,
          //    success:(e)=> {
          //          dispatch(clearTemporarilyImage_action());
          //    },
          //    error:(error)=>{
          //        showNoty("error", error.responseJSON.message)
          //        console.log(error)
          //    },
          //});
      //}
      dispatch(clearTemporarilyImage_action());

    $(`.${styles['modal__contents']}`).removeClass(styles['active']);
    $(`.${styles['overlay__contents']}`).removeClass(styles['active']);
    setTimeout(()=>{
      dispatch(openModalDropzone_action())
    },300)
  }

  const cropImageSaveContinue = function(e){
      const cropData = JSON.parse(sessionStorage.getItem('cropData'));
      console.log(cropData);
            $.ajax({
                method:'put',
                url:`/api/works/element/update?work_element_id=${temporarilyImage?.[0]?.id || cropData.change}&update_type=image&image[width]=${cropData.nWidth}&image[height]=${cropData.nHeight}&selection[width]=${cropData.selWidth}&selection[x]=${cropData.x}&selection[y]=${cropData.y}`,
                success:(e)=> {
                    console.log(e);
                    showNoty("success", 'Изображение обновлено');
                    // для обложки используем cover

                    if (cropData.change){
                        dispatch(updateImageElement_action(e.success));
                        dispatch(changeCropData_action(null));
                        const el = document.querySelector(`[data-id='${e.success.id}'] img`);
                        console.log(e.success.id, el);
                        setTimeout(()=>{
                            el.src = getImageToUri(e.success.image[0], `cover/746`) + '?r='+ Math.random() * 1000;
                        },1000)
                        //console.log(getImageToUri(e.success.image[0], `cover/746`));
                    }else{
                        dispatch(addImageElement_action(e.success))
                    }
                    sessionStorage.setItem('cropData', '');
                    setTimeout(()=>{
                        handleRequestCloseFunc();
                    },300)
                },
                error:(error)=>{
                    //showNoty("error", error.responseJSON.message)
                    console.log(error)
                },
            });
  }

  return (
  <Modal
    className={styles['modal__contents']}
    isOpen={openModalDropzone}
    onRequestClose={handleRequestCloseFunc}
    onAfterOpen={handleAfterOpenFunc}
    overlayClassName={styles['overlay__contents']}>
    {children}

    <div className="modal__body">
      <div className="modal-content">
        <button onClick={handleRequestCloseFunc} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <ReactSVG id="cross-icon" src={'/icons/contest-icons/closex.svg'}/>
        </button>

        <h3 className="modal-content__title">Фотография для конкурса</h3>
        <ul className="modal-content__list-group">
          <li className="modal-content__item-li">будет обрезана до квадратной формы.</li>
          <li className="modal-content__item-li">выбранная область будет показываться на странице конкурса.</li>
        </ul>
        <div className="dropzone-block">
            {
                loading && <ReactSVG src={"/images/loader-catalog.svg"} className={"loaderImage"}/>
            }

            {
                changeCroppedImage ?
                    <div className={'wrapForImageCropperWithoutDropzone'}>
                        <ImageWithCropper change={changeCroppedImage.id} photoArray={[{preview:getImageToUri(changeCroppedImage.image[0], `resize/768-0`)}]}/>
                    </div>
                    :
                    <SimpleDropZone>
                        <div  style={loading || changeCroppedImage ? {'display':'none'}:{}} className={"dropzone dz-clickable"}>
                            <div  className="dz-message dz-message-large">
                                <span>Выберите фотографию</span>
                                <strong>Будет обрезана до квадратной формы</strong>
                            </div>
                        </div>
                    </SimpleDropZone>
            }
          <div className="dropzone-block-btns">
            <button onClick={handleRequestCloseFunc} className="dropzone-block-btn" data-dismiss="modal" aria-label="Close">Отмена</button>
            <button onClick={cropImageSaveContinue} className={`dropzone-block-btn dropzone-block-btn--active ${loading ? 'loadingInBtn' : ''}`} data-image="continue">

              {window.innerWidth >= 550 ? <span className={`save-change-text`}>Сохранить и продолжить</span> : <span className={`save-change-text-mobile ${loading ? 'loadingInBtn' : ''}`}>Добавить</span>}
            </button>
              {/*loadingInBtn*/}
          </div>
        </div>
      </div>
    </div>
  </Modal>
  )
}
