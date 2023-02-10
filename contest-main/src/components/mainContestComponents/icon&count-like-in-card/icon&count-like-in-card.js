import React, {useEffect, useState} from 'react';
import styles from "./icon&count-like-in-card.module.scss";
import {useDispatch, useSelector} from 'react-redux';
import {toggleLike_action} from '../../../actions/actions';
import {showNoty} from '../../../../../../helpers';
import $ from 'jquery';
import LikeIcon from '../like-icon/like-icon';
import LikeCount from '../like-count/like-count';

const IconAndCountLikeInCard = ({children , place, archive, lk, likeToggle, liked, countLike, style}) => {
  const dispatch = useDispatch();
  useEffect(()=>{

  },[liked])
  //const customer = useSelector(state=>state.customer);
  //
  //const url = useSelector(state=>state.urlForLike);
  //  const [actLike, setActLike] = useState(liked)
  //
  //function likeToggle(){
  //  if (!customer){
  //      document.querySelector('[data-target="#modal-login"]').click();
  //  }else {
  //    $.ajax({
  //      method:'POST',
  //      url:url,
  //      data:{
  //        work_id: dataValue,
  //        customer_id: customer,
  //      },
  //      success:(e)=> {
  //
  //        console.log(e);
  //        showNoty("success", e.message);
  //        dispatch(toggleLike_action(e.total, dataValue, e.message == "Голос удалён" ? false : true));
  //        setActLike(!actLike);
  //      },
  //      error:(error)=>{
  //        showNoty("error", error.responseJSON.message)
  //        console.log(error)
  //      }
  //    })
  //  }
  //
  //}
  //useEffect(()=>{
  //
  //}, [actLike]);
  return (
    <div style={style ?? {}} onClick={likeToggle} tabIndex={0}
         className={(place || archive || lk) ? styles['disabled'] : liked  ? (styles['goods__like'] + ' ' + styles.active) : styles['goods__like']}>
      {children}
        {
            (place || archive || lk) ? null : <div style={{display:'flex',width:'100%', justifyContent:'center', alignItems:'center'}}>
                <LikeIcon liked={liked } place={place} archive={archive} />
                <LikeCount liked={liked } place={place} countLike={countLike}/>
            </div>
        }

    </div>
  )
}
export default IconAndCountLikeInCard;
