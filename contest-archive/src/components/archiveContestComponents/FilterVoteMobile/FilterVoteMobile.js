import React from "react";
import "./FilterVoteMobile.scss";
import {useDispatch, useSelector} from 'react-redux';
import {setVote_action} from '../../../actions/actions';
import {ReactSVG} from 'react-svg';

const FilterVoteMobile = () => {
  const value = useSelector(state=> state.sortVote);
  const dispatch = useDispatch();
  function chooseSelect(event){
    dispatch(setVote_action(event.target.value))
  }
  return (
    <div className={"FilterVoteMobile"}>
      <select onChange={chooseSelect} defaultValue={value} className="sorting__select">
        <option  value='lessVote'>Меньше голосов</option>
        <option  value='moreVote'>Больше голосов</option>
        <option  value='addEarlier'>Добавлено раньше</option>
        <option  value='addLater'>Добавлено позже</option>
      </select>
      <ReactSVG className={"FilterVoteMobile__icon"} src={"/icons/contest-icons/selectIcon.svg"} wrapper={"span"} style={{fontSize:"0"}} />
    </div>
  )
}
export default FilterVoteMobile;
