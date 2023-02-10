import {
  clearInputDataSearch_action,
  searchYarnInputValue_action,
} from '../../../../actions/actions';
import {ReactSVG} from 'react-svg';
import React from 'react';
import './modalYarn.scss';
import {useDispatch, useSelector} from 'react-redux';

import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {YarnOnPageMemo} from '../yarnOnPage/yarnOnPage';
import {UnSelectYarn} from '../unSelectYarn/unSelectYarn';

export const ModalYarn = () => {
  const searchValue = useSelector(state=>state.searchYarnInputValue)
  const dispatch = useDispatch();
  const arrYarn = useSelector(state => state.listYarn);
  const visibleItems = searchYarn01(arrYarn, searchValue);
  const yarnsOnPageArr = useSelector(state=>state.yarnsOnPageArr)

  function searchYarn01(items, term){
    if (term.length === 0) {
      return items
    }
    return items.filter((item) => {
      return item.name
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  }
  function searchYarn(e){
      console.log('funcSearchYarn');
    dispatch(searchYarnInputValue_action(e.target.value));
  }


  return (
      <div className={'modal-add-yarn__body'}>
        <article  className={'wrap-search'}>
          <input className={'modal-add-yarn__search'} value={searchValue} data-nolabel="" onChange={searchYarn} type="search" placeholder={'Поиск пряжи'}/>
          <ReactSVG style={searchValue.length === 0 ? {}:{display:"none"}} className={'search-svg'} wrapper={'span'} src={'/icons/contest-icons/search-icon.svg'}/>
          <ReactSVG onClick={()=>dispatch(clearInputDataSearch_action())} style={searchValue.length > 0 ? {}:{display:"none"}} className={'remove-data-input'} wrapper={'span'} src={'/icons/contest-icons/input-delete.svg'}/>

        </article>

        <section className="wrapSelected_Total">
            <YarnOnPageMemo/>
          <div className="total_yarn">
            {searchValue.length === 0 ? <p className="modal-add-yarn__subtitle-bold">Ваши покупки</p> : <p className="modal-add-yarn__subtitle-bold">Результаты поиска</p>}

            <p className="modal-add-yarn__count-yarn">Всего {searchValue.length === 0 ? arrYarn.length + yarnsOnPageArr.length : visibleItems.length}</p>
            <PerfectScrollbar
              style={
                (yarnsOnPageArr.length === 0 &&
                window.innerWidth <= 500 ) ?
                  {height:"65vh"} :
                  (yarnsOnPageArr.length === 0 &&
                window.innerWidth >= 501 ) ? arrYarn.length < 5 ? {} : {height:"67.6vh"} :
                  {}}
              className={window.block  ? "aria-list block" : "aria-list"} options={{suppressScrollX:true, maxScrollbarLength: 68,wheelSpeed:0.5, swipeEasing: true }} >
              {visibleItems.map((el) =>{
                return <UnSelectYarn key={el.id} el={el}/>
              }
                
              )}
            </PerfectScrollbar>

          </div>


        </section>
        <hr className={'yarn-line'}/>
      </div>
  );
};
export const ModalYarnMemo = React.memo(ModalYarn);

