import React from 'react';
import "./input-for-social-link.scss";
import {useDispatch, useSelector} from 'react-redux';
import {linkInputValue_action} from '../../../../actions/actions';
import $ from 'jquery';
import {showNoty} from '../../../../../../../helpers';

const InputForSocialLink = ()=>{
  const dispatch = useDispatch();
    const id = useSelector(state=>state.idWorkForEmptyUrl);
    const value = useSelector(state=>state.linkSocialNetwork);
    function takeValueOfLink(e){
        dispatch(linkInputValue_action(e.target.value))
    }
  function takeValueOfLinkBlur(event){
      $.ajax({
          method: `put`,
          url:`/api/works/${id}?social_link=${event.target.value}`,
          success:(e)=> {
              showNoty("success", e.success.message);
              dispatch(linkInputValue_action(e.success.work.social_link))
          },
          error:(error)=>{
              showNoty("error", error.responseJSON.message)
              console.log(error)
          },
      });

  }
  return (
    <div className={"add-link-for-social"}>
      <input data-nolabel
             value={value}
             onChange={takeValueOfLink}
             onBlur={takeValueOfLinkBlur}
             placeholder={"https://vk.com/vazanyirf"} type="text" id={"add-link-for-social__input"}/>
    </div>
  )
}
export default InputForSocialLink;
