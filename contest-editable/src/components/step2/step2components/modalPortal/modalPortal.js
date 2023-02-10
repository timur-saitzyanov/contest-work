import React from 'react';
import * as ReactDOM from 'react-dom';

export default function ModalPortal({open, children}) {
  if (!open) return null;
  return ReactDOM.createPortal(
    <div className={"portalOverlay"}>
        {children}
    </div>, document.querySelector('html body'),
  );

}
