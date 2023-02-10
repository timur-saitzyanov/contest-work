import React from "react";
import "./description-composition-card.scss";
import ReactHtmlParser from 'react-html-parser';

const DescriptionCard = ({composition, place})=>{
  return (
    <span data-c={"red"} className={place == 1 ? 'descriptionCard first' : place == 2  ? 'descriptionCard second' : place == 3 ? 'descriptionCard third' : 'descriptionCard'}>{ReactHtmlParser(composition)}</span>
  )
}
export default DescriptionCard;
