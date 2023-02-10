import React from 'react';
import "./FilterVoteLargeScreen.scss";
import {useDispatch, useSelector} from 'react-redux';
import {setVote_action} from '../../../actions/actions';

export const FilterVoteLargeScreen = ()=>{
  let dispatch = useDispatch();
  let value = useSelector((state) => state.sortVote);
  const arr = useSelector(state=>state.data.sorting);

  function changeTabs(event) {
    dispatch(setVote_action(event.target.value));
  }
  return (
    <section className="sort-vote">
      <span className="sort-vote__text">Всего: {useSelector(state=>state.paginator.total)}</span>
      <span className="sort-vote__text">Сначала:</span>
      {
        arr.map((el)=>{
          return (
            <label key={el.title}>
              <input  className={'vote-tabs'} style={{display: 'none'}} type="radio" name="radio" value={el.title}
                      checked={value === el.title}
                      onChange={changeTabs}/><span className={"sort-vote__btn"}>{el.title}</span>
            </label>
          )
        })
      }
    </section>
  )
}
