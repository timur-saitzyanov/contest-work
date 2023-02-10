import React from 'react';
import "./btn-add-yarn.scss";
import {useDispatch, useSelector} from 'react-redux';
import {toggleModalYarn_action} from '../../../../actions/actions';


export default function BtnAddYarn(){
  const arrOnPage = useSelector(state=>state.yarnsOnPageArr)
  const dispatch = useDispatch();
  return (
    <button onClick={()=>{
      dispatch(toggleModalYarn_action())}} className={"btn-add-yarn"}><span>{arrOnPage.length > 0 ? "Добавить еще" : "Добавить пряжу"}</span></button>
  )
}
