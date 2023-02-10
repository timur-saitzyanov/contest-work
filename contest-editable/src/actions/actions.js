import {
    mainBtnStep1,
    step1Ready,
    titleOfWork,
    addCkeditor,
    addImage,
    changeImage,
    removeImage,
    sendCkeditorData,
    openModalDropzone,
    cropImage,
    setCurrentStep2,
    toggleModalYarn,
    searchYarnInputValue,
    linkInputValue,
    deleteYarnOnPage,
    sendUnselectElement,
    chooseDateOfPublic,
    filterArr,
    animateEnd,
    takeOffAnimate,
    firstTimesInChoosedYarn,
    blockChoiceYarn,
    removedElement,
    elemSelected,
    adviceMobileToggle,
    clearInputDataSearch,
    setCurrentWorkValues,
    removeElementOfEditors,
    firstSendingImage,
    addTemporarilyImage,
    setIdWorkForEmptyUrl,
    togglePreviewWork,
    previewWorkLoaded,
    setNecessaryStructureYarnArr,
    setTakeYarn,
    toggleSuccessModal, setCropData, clearTemporarilyImage, changeCropData, addImageElement, updateImageElement,
} from '../types/types';

export const mainBtnStep1_action = () => { return { type: mainBtnStep1 } };
export const step1Ready_action = ()=>{ return {type: step1Ready}};
export const removeElementOfEditors_action = (id)=> { return {type:removeElementOfEditors, payload:id, }}
export const titleOfWork_action = (title)=>{
  return {
    type: titleOfWork,
    payload: title,}
};
export const addCkeditor_action = (obj)=>{ return {type: addCkeditor, payload:obj}};
export const addImage_action = ()=>{ return {type: addImage}};
export const changeImage_action = ()=>{ return {type: changeImage}};
export const removeImage_action = ()=>{ return {type: removeImage}};
export const sendCkeditorData_action = (data, id, index)=>{ return {
  type:sendCkeditorData,
  data,
  id,
  index
}}
export const openModalDropzone_action = ()=> {return {type:openModalDropzone}};
export const cropImage_action = ()=> {return {type: cropImage}};
export const setCurrentStep2_action = ()=> {return {type: setCurrentStep2}};
export const toggleModalYarn_action = ()=>{return {type: toggleModalYarn}}
export const searchYarnInputValue_action=(val)=> {return {type:searchYarnInputValue,val}}
export const linkInputValue_action = (linkValue) => {return {type:linkInputValue, linkValue}}
export  const deleteYarnOnPage_action=(id) => {return {type:deleteYarnOnPage, id}}
export const sendUnselectElement_action = (id)=>{return {type:sendUnselectElement, id}}
export const chooseDateOfPublic_action = (val)=>{return {type:chooseDateOfPublic, val}}
export const filterArr_action = (id)=>{
  return {
    type:filterArr,
    id
  }
}
export const animateEnd_action = (id)=> {return {type:animateEnd, id}}
export const takeOffAnimate_action = (id)=>{return {type:takeOffAnimate, id}}
export const firstTimesInChoosedYarn_action = (id) => {
  return {type:firstTimesInChoosedYarn, id}}
export const blockChoiceYarn_action = ()=>{
  return {type:blockChoiceYarn};
}
export const elemSelected_action = (id)=>{
  return {type:elemSelected,id}
}
export const removedElement_action = (id)=>{
  return {
    type:removedElement,
    id
  }
}
export const adviceMobileToggle_action = ()=>{
  return {
    type:adviceMobileToggle,
  }
}
export const clearInputDataSearch_action = ()=>{
  return {
    type:clearInputDataSearch,
  }
}
export const setCurrentWorkValues_action = (value)=>{
    return {
        type:setCurrentWorkValues,
        payload: value,
    }
}
export const firstSendingImage_action = ()=>{
    return {
        type:firstSendingImage,
    }
}
export const addTemporarilyImage_action = (obj)=>{
    return {
        type:addTemporarilyImage,
        payload:obj,
    }
}
export const setIdWorkForEmptyUrl_action = (id)=>({type:setIdWorkForEmptyUrl,payload:id});
export const togglePreviewWork_action = ()=>({type:togglePreviewWork});
export const previewWorkLoaded_action = (status)=>({type:previewWorkLoaded, payload:status});
export const toggleSuccessModal_action = ()=>({type:toggleSuccessModal})
export const setNecessaryStructureYarnArr_action = (newArr)=>{
    return {
        type:setNecessaryStructureYarnArr,
        payload:newArr,
    }
}
export const setTakeYarn_action = (arr)=>({type:setTakeYarn, payload:arr})
export const setCropData_action = (payload)=>{
   return {
       type:setCropData,
       payload
   }
}
export const clearTemporarilyImage_action = ()=>({type:clearTemporarilyImage})
export const changeCropData_action = (payload) => ({type:changeCropData, payload: payload});
export const addImageElement_action = (payload)=>({type:addImageElement, payload});
export const updateImageElement_action = (payload) =>({type:updateImageElement, payload});
