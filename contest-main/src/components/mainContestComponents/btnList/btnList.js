import React from 'react';
import './btnList.scss';
import {useDispatch} from 'react-redux';


const BtnList = ({btnsValue}) => {
  let dispatch = useDispatch();
  let classBtn = 'contest-work-initial-btn';


  return (
      <div style={innerWidth <= 991 ? {overflow:'auto', marginLeft:'16px', paddingBottom:'10px', paddingTop:'2px'} : {}}>
          <div className="contest-work-initial__btns">
              <label>
                  <input className={'radio-step1'} style={{display: 'none'}} type="radio" name="radioFilter" value=""
                         checked={btnsValue.val === ""}
                         onChange={(e)=>dispatch(btnsValue.f(e))}/><span className={classBtn}>Все категории</span>
              </label>

              {btnsValue.arr.map(el=>
                  <label key={el.id}>
                      <input key={el.id} className={'radio-step1'} style={{display: 'none'}} type="radio" name="radioFilter" value={el.id}
                             checked={btnsValue.val === el.id.toString()}
                             onChange={(e)=>dispatch(btnsValue.f(e))}/><span className={classBtn}>{el.title}</span>
                  </label>
              )}
          </div>
      </div>
  );
};
export default BtnList;
