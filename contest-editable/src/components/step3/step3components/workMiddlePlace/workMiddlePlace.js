import React from 'react';
import "./workMiddlePlace.scss";
import BtnAddYarn from '../btn-add-yarn/btn-add-yarn';
import {ModalYarnMemo} from '../modalYarn/modalYarn';
import * as ReactDOM from 'react-dom';
import {ReactSVG} from 'react-svg';
import {toggleModalYarn_action} from '../../../../actions/actions';
import {useDispatch} from 'react-redux';

const WorkMiddlePlace = ({modal})=>{
  if (modal) {
    document.body.style.overflow = 'hidden';
  } else if (!modal) {
    document.body.style.overflow = 'visible';
  }
  const dispatch = useDispatch()
  return (
    <div className="work-middle-place">
      {window.innerWidth <= 1081 ?
        <BtnAddYarn/>  : <ModalYarnMemo/>}


      {window.innerWidth <= 1081 && modal ?

        ReactDOM.createPortal(
          <div className={modal ? "modal-yarn" : "modal-yarn animModal"}>
            <div className="modal-yarn-body">
            <ReactSVG onClick={()=>dispatch(toggleModalYarn_action())} className={"modal-yarn-close"} src={"/icons/contest-icons/smallX.svg"}/>
            <h1 className="choose-of-yarn-modal">Укажите из какой пряжи выполнена конкурсная работа</h1>
            <ModalYarnMemo />
              {window.innerWidth <= 790 ? null :
                  <button onClick={()=>dispatch(toggleModalYarn_action())} className="modal-yarn-btn">
                    <span>Сохранить</span>
                  </button>
              }

            </div>
          </div>, document.querySelector('html body')) : null}
    </div>
  )
}
export const WorkMiddlePlaceMemo = React.memo(WorkMiddlePlace);

