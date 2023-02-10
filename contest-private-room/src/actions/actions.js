import {editCard, paginatorData, receiveWorks, removeCard, setLkCategory, setTrueAfterDeletingWork, toggleLoading} from '../types/types';

export const toggleLoading_action = ()=> ({type:toggleLoading});
export const  receiveWorks_action = (arr)=>({type:receiveWorks, arr});
export const paginatorData_action = (paginator) => ({type:paginatorData, paginator})

export const lkCategory_action = (value)=>{ return {type:setLkCategory,tabsValue: value}}

export const removeCard_action = (id) => { return {type:removeCard, id}};
export const editCard_action = (id) => { return {type:editCard, id}};
export const setTrueAfterDeletingWork_action = ()=>{
    return {
        type:setTrueAfterDeletingWork,
    }
}





