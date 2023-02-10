import React from 'react';
import "./add-work-card.scss";
import {ReactSVG} from 'react-svg';
import {useSelector} from 'react-redux';

const AddWorkCard = ({text, lengthCard})=> {
    const createAllowAndLink = useSelector(state=>({
    createAllowed: state.allowCreate,
    createLink:  state.data?.resources.create,
}));
    // надо будет доработать в плане какие статусы можно удалять
    const url = createAllowAndLink.createAllowed ? createAllowAndLink.createLink :'#'
  return (
    <div role="button" className="main-contest-my-works-personal-profile-main-block-item-work--add-work">
      <a style={lengthCard===0 ? {width:"320px",height:"320px"}:innerWidth >= 1600 ? {'minHeight':'317px'} :{}} href={url.toString()} className="main-contest-my-works-personal-profile-main-block-itemwork__img-cont my-works-personal-profile-main-block-itemwork__img-cont--red-dashed-line">
        <div className="add-work-btn-bg">
          <ReactSVG wrapper={"span"} src={"/icons/contest-icons/addWork.svg"}/>
          <p>{text}</p>
        </div>
      </a>
    </div>
  )
}
export default AddWorkCard;
