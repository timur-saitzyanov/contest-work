import React from 'react';
import './yarnOnPage.scss';
import {useDispatch, useSelector} from 'react-redux';
import {YarnOnPageElement} from '../yarnOnPageElement/yarnOnPageElement';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {toggleModalYarn_action} from '../../../../actions/actions';

const YarnOnPage = () => {

  const dispatch = useDispatch()
  const yarnOnPageArr = useSelector(state => state.yarnsOnPageArr);
if (window.innerWidth <= 790){
  return (
    <section style={yarnOnPageArr.length === 0 ? {height:"90px"} : {}} className="yarn-on-page__mobile">
    {yarnOnPageArr.length > 0 ? <>
       <p className="modal-add-yarn__count-selected">Выбрано: <span>{yarnOnPageArr.length}</span></p>
        <section style={{'overflow-x':'auto'}} className={"scrollBar-yarn-OnPage__mobile"}>
          {yarnOnPageArr.map((el) =>
            <YarnOnPageElement key={el.id} el={el}/>
          )}
        </section>
        </>
        :null
    }
      <div style={{display:"flex", justifyContent:"center"}}>
        <button onClick={()=>dispatch(toggleModalYarn_action())} style={{marginTop:"10px"}} className="modal-yarn-btn">
          <span>Сохранить</span>
        </button>
      </div>
    </section>
  )
}


  return (
    <section className="yarn-on-page">
      {yarnOnPageArr.length > 0 ? <p className="modal-add-yarn__count-selected">Выбрано: <span>{yarnOnPageArr.length}</span></p> :null}
        <PerfectScrollbar   className={"scrollBar-yarn-OnPage"} options={{suppressScrollX:true, wheelSpeed:0.5, maxScrollbarLength: 68, swipeEasing: true }} >
        {yarnOnPageArr.map((el) =>
            <YarnOnPageElement key={el.id} el={el}/>
        )}
        </PerfectScrollbar>
    </section>
  );
};
export const YarnOnPageMemo = React.memo(YarnOnPage);
