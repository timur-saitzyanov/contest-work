import {receiveNewItemsOfWinner, setCategory, setVote, setWinner, toggleLike, togglePreview} from '../types/types';
import {togglePreviewWork, getWorks, loading} from '../types/types';
import {previewWorkLoaded} from '../../../contest-editable/src/types/types';
export const setCategory_action = (value)=>{
  return {
  type:setCategory,
  filterValue: value};
}
export const previewWorkLoaded_action = (status)=>({type:previewWorkLoaded, payload:status});
export const receiveNewItemsOfWinner_action = ()=> {return {type:receiveNewItemsOfWinner,
}}
export const togglePreviewWork_action = ()=>({type:togglePreviewWork});
export const winnerCategory_action = (value)=>{ return {type:setWinner,tabsValue: value
}}
export const setVote_action = (value)=>{ return {type:setVote,sortValue: value
}}
export const toggleLike_action = (val, id, liked, modalLike=false)=>{
  return {
    type:toggleLike,
    val,
    id,
    liked,
  modalLike,
  }
}
export const getWorks_action = (works)=> ({type: getWorks, works});
export const loading_action = ()=>({type:loading});
