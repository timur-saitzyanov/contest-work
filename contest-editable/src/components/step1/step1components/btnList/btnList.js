import React from 'react';
import './btnList.scss';
import {useDispatch, useSelector} from 'react-redux';
import {mainBtnStep1_action, setCurrentStep2_action, setCurrentWorkValues_action, setIdWorkForEmptyUrl_action, setTakeYarn_action, step1Ready_action} from '../../../../actions/actions';
import $ from 'jquery';

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': app.token,
    },
});
const BtnList = () => {
  const dispatch = useDispatch();
  const value = useSelector((state)=>state.categoryContestWork);
    const currentWork =  useSelector(state=>state.currentWork);
    let id = useSelector(state => state.idWorkForEmptyUrl);
    let classBtn = 'contest-work-initial-btn';
  function changeValue(event) {
      const elementBtn = event.target.nextElementSibling;
      elementBtn.classList.add('loadingInBtn');
      if (currentWork){
          $.ajax({
          method:'PUT',
          url:`/api/works/${id}?work_category_id=${+event.target.value}`,
          success:(e)=> {
              dispatch(setCurrentWorkValues_action([e.success.work]));

              elementBtn.classList.remove('loadingInBtn')
          },
          error:(error)=>{
              console.log(error)
          },
      });
      }else {
          $.ajax({
              method:'post',
              url:'/api/works/store',
              data:{
                  "work_category_id":+event.target.value,
              },
              success:(e)=> {
                  dispatch(setCurrentWorkValues_action([e.success]));
                  elementBtn.classList.remove('loadingInBtn');
                  dispatch(step1Ready_action());
                  dispatch(setCurrentStep2_action());
                  dispatch(mainBtnStep1_action());
                    dispatch(setIdWorkForEmptyUrl_action(e.success.id));
                    const arr = e.success.available_product_mods;
                    arr.forEach((el,index)=>{
                      el.id = (el.product_mod_id ? el.product_mod_id : el.product_id).toString();
                      console.log(typeof el.id);
                      el.i = index;
                      el.selected = false;
                      el.animate = false;
                  });
                    dispatch(setTakeYarn_action(arr));
              },
              error:(error)=>{
                  console.log(error)
              }
          });
      }
  }
  const arr = useSelector(state=>state.categoryContestArr);
  return (

    <div className="contest-work-initial__btns">
        {
            arr.map(el=>
                <label key={el.id}>
                    <input key={el.id} className={'radio-step1'} style={{display: 'none'}} type="radio" name="radioFilter" value={el.id}
                           checked={value === el.id}
                           onChange={changeValue}/><span className={classBtn}>{el.title}</span>
                </label>
            )
        }
    </div>
  );
};
export default BtnList;
