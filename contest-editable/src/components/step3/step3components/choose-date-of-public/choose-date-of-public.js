import React from 'react';
import "./choose-date-of-public.scss";
import {useDispatch, useSelector} from 'react-redux';
import {chooseDateOfPublic_action} from '../../../../actions/actions';
import RadioButton from '../../../../../../../components/Primitive/RadioButton';
import {convertDate, showNoty} from '../../../../../../../helpers';
import $ from 'jquery';

const ChooseDateOfPublic = ()=>{
  const id = useSelector(state=>state.idWorkForEmptyUrl);
  let datesOfPublicArr = useSelector(state=>state.datesOfPublic)
  const selectedValue = useSelector(state=>state.selectedDate)
  const dispatch  = useDispatch();
 function chooseDateOfPublic(value){
     $.ajax({
         method:'put',
         url:`/api/works/${id}?contest_id=${+value}`,
         success:(e)=> {

             console.log(e);
             showNoty("success", e.success.message);
             dispatch(chooseDateOfPublic_action(e.success.work.contest_id))
         },
         error:(error)=>{
             showNoty("error", error.responseJSON.message)
             console.log(error)
         },
     });

 }
  return (
    <section className="contest-work-step3-date-publication">
      <p className="contest-work-step3-date-publication__title">
        Выберите дату публикации работы в конкурсе
      </p>

      {
        datesOfPublicArr.map((el,i)=>
          <RadioButton key={i} value={el.id} style={{display:"block", marginBottom:"10px"}}
                       onChange={()=>chooseDateOfPublic(el.id)}
                       checked={selectedValue == el.id}
                       title={
                         //`${convertDate(el.start_date, true).day} ${convertDate(el.start_date, true).month}`
                           new Date(el.start_date).toLocaleDateString('ru', {month:"long", day:"numeric"})
                       }
          />
        )
      }
    </section>
  )
}
export default ChooseDateOfPublic;
/*
new Date(el).toLocaleDateString('ru', {month:"long", day:"numeric"})  - это выражение пишет
                                                                        invalidDate на платформе IOS
                                                                        */
