import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import './btnList.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory_action} from '../../../actions/actions';

const BtnList = () => {
  let dispatch = useDispatch();
  const valueD = useSelector((state) => state.filterCategory);
  let classBtn = 'contest-work-initial-btn';
  console.log(valueD);
  function changeValue(event) {
    dispatch(setCategory_action(event.target.value));
  }

  return (
    <PerfectScrollbar>
      <div className="contest-work-initial__btns">
        <label>
          <input  className={'radio-step1'} style={{display: 'none'}} type="radio" name="radioFilter" value="all"
                 checked={valueD === "all"}
                 onChange={changeValue}/><span className={valueD === "all" ? classBtn + " border" : classBtn}>Все категории</span>
        </label>

        <label >
          <input className={'radio-step1'} style={{display: 'none'}} type="radio" name="radioFilter" value="dress"
                 checked={valueD === "dress"}
                 onChange={changeValue}/><span className={classBtn}>Одежда</span>
        </label>

        <label >
          <input style={{display: 'none'}} className={'radio-step1'} type="radio" name="radioFilter" value="toys"
                 checked={valueD === "toys"}
                 onChange={changeValue}/><span className={classBtn}>Игрушки</span>
        </label>

        <label >
          <input style={{display: 'none'}} className={'radio-step1'} type="radio" name="radioFilter" value="accessories"
                 checked={valueD === "accessories"}
                 onChange={changeValue}/>
          <span className={classBtn}>Аксессуары</span>
        </label>
      </div>
    </PerfectScrollbar>

  );
};
export default BtnList;
