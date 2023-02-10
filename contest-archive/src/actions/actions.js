import {changePaginatorData, getWorks, loading, setCategory, setVote} from '../types/types';
import {togglePreviewWork} from '../../../contest-main/src/types/types';
import {previewWorkLoaded} from '../../../contest-editable/src/types/types';
export const setCategory_action = (value)=>{
  return {
  type:setCategory,
  filterValue: value};
}
export const setVote_action = (value)=>({type:setVote,sortValue: value});
export const loading_action = ()=>({type:loading});
export const changePaginatorData_action = (data)=>({type:changePaginatorData, data});
export const getWorks_action = (works)=> ({type: getWorks, works});
export const togglePreviewWork_action = ()=>({type:togglePreviewWork});
export const previewWorkLoaded_action = (status)=>({type:previewWorkLoaded, payload:status});


