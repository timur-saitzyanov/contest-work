import React from 'react';
import  "./BtnAddImageDropzone.scss";
import {ReactSVG} from 'react-svg';
import {openModalDropzone_action} from '../../../../actions/actions';
import {useDispatch} from 'react-redux';

export const BtnAddImageDropzone = ()=>{
  const dispatch = useDispatch();
  function addDropzone() {
    dispatch(openModalDropzone_action())
  }
  return (
    <button className={'add-dropzone'} onClick={addDropzone} data-target="#exampleModalCenter">
      <ReactSVG src={"/icons/contest-icons/iconPhotoImgDrop.svg"}/>
    </button>
  )
}

