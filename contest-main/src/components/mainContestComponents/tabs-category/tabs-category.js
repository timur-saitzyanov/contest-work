import React from 'react';
import "./tabs-category.scss";
import {useDispatch} from 'react-redux';

const TabsCategory = (props)=>{
  let dispatch = useDispatch();
  return (
    <section className={"tabs-category"}>
      {props.tabsValues.arr.map(el=>
        <label key={el.id}>
        <input  className={'radio-tabs'} style={{display: 'none'}} type="radio" name="radio" value={el.id}
        checked={props.tabsValues.val === el.id.toString()}
        onChange={(e)=>dispatch(props.tabsValues.f(e))}/><span className={"tabs-category-item"}>{el.title}</span>
        </label>
      )}
    </section>
  )
}
export const TabsCategoryMemo = React.memo(TabsCategory);
