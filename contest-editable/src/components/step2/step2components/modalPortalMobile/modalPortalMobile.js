import React from 'react';
import "./modalPortalMobile.scss";
import * as ReactDOM from 'react-dom';
export const ModalPortalMobile = ({open, children})=>{
  if (!open) return null;
  return  ReactDOM.createPortal(
    <div className={"overlay-modal-mobile-portal slide"}>
      {children}
    </div>, document.querySelector('html body'),
  )
}

