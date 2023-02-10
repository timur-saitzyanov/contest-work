import {initialState} from './state';
import {
    addCkeditor,
    addImage,
    adviceMobileToggle,
    animateEnd,
    chooseDateOfPublic,
    clearInputDataSearch,
    cropImage,
    deleteYarnOnPage,
    elemSelected,
    filterArr,
    firstTimesInChoosedYarn,
    linkInputValue,
    mainBtnStep1,
    openModalDropzone,
    removedElement,
    searchYarnInputValue,
    sendCkeditorData,
    step1Ready,
    takeOffAnimate,
    titleOfWork,
    toggleModalYarn,
    setCurrentWorkValues,
    removeElementOfEditors,
    firstSendingImage,
    addTemporarilyImage,
    setIdWorkForEmptyUrl,
    togglePreviewWork,
    previewWorkLoaded, setTakeYarn, toggleSuccessModal, setCropData, clearTemporarilyImage, changeCropData, addImageElement, updateImageElement,
} from '../types/types';
import {updateImageElement_action} from '../actions/actions';


export function rootReducers(state = initialState, action) {

  switch (action.type) {
      case toggleSuccessModal:
          return {...state, successModalStatus: !state.successModalStatus}

      case setCurrentWorkValues:
          return {
              ...state,
              currentWork: action.payload,
              categoryContestWork: action.payload[0].work_category_id,
          }

      case togglePreviewWork:
          return {...state, openPreview:!state.openPreview}


    case mainBtnStep1:
      return {...state, step1BtnActive: true};

      case previewWorkLoaded:
          return {...state, previewWorkLoaded:action.payload}


     case setIdWorkForEmptyUrl:
      return {...state, idWorkForEmptyUrl:action.payload};


    case step1Ready:
      return {...state, step1Ready: true, step2: true};

    case titleOfWork:
      return {...state, titleOfWork: action.payload};

      case addImageElement:
          const editor = [...state.editors];
            editor.push(action.payload);
      return {...state, editors: editor};
    case addCkeditor:
        let addingEditor = [...state.editors];
        addingEditor.push(action.payload);
      return {...state, editors: addingEditor};


    case sendCkeditorData:
      let nArr = [...state.editors];
      let editedCk = nArr[action.index];
      editedCk.text = action.data;
      return {...state, editors: nArr};

      case updateImageElement:
          let els = [...state.editors];
          const img = els.find(el=>el.id == action.payload.id);
          const indx = els.indexOf(img);
          els[indx] = action.payload;
          return {
              ...state, editors: els
          };
  case removeElementOfEditors:
      const filteredArr = [...state.editors].filter(el=>el.id !== action.payload);

      return {...state, editors: filteredArr}

    case addImage :
      return {
        ...state, editors: [
          ...state.editors, {
            name: 'Dropzone',
            imageName: '', isCropped: false, id: Date.now(), isOpen: false,
          }],
      };


    case openModalDropzone :
      return {...state, modalDropzone: !state.modalDropzone};


    case  cropImage :
      return {...state, statusOfCropped: !state.statusOfCropped};


    case toggleModalYarn:
      return {...state, modalYarn: !state.modalYarn};


    case elemSelected :
      let d = [...state.listYarn];
      d.map((el)=>{
        if(el.id === action.id){
          el.selected = !el.selected;
          return;
        }
      })
      return {...state, listYarn: d}


    case searchYarnInputValue :
      return {...state, searchYarnInputValue: action.val};
    case linkInputValue:
      return {...state, linkSocialNetwork: action.linkValue};

      case setTakeYarn:
          return {...state, listYarn: action.payload}


    case deleteYarnOnPage :
      const elm = state.yarnsOnPageArr.find(el=>el.id === action.id);
      elm.selected = false;
      elm.finishAnimate = false;
      elm.remove = true
      let s = [...state.listYarn];
      // поменять значение константы на (общее кол-во элементов)
      const len = state.listYarn;

      let place;
      s = s.sort((a,b)=>+a.i - +b.i)
      if (s.length === 0){
        place = {i:0}
      }
       place = s.find(el=> {
         if (el.i >= len) {
           return el
         }
         return el.i > elm.i
       });
      s.splice(place?.i ? place.i-1  : len , 0, elm)
      return {...state, listYarn: s , yarnsOnPageArr: [...state.yarnsOnPageArr.filter((el) => el.id !== action.id)], };


    case chooseDateOfPublic :
      return {...state, selectedDate: action.val};


    case filterArr:
      const e = state.listYarn.find(e => e.id === action.id);
      return {...state, listYarn:
          [...state.listYarn].filter(el=>el.selected === false), yarnsOnPageArr: [e, ...state.yarnsOnPageArr ]
      };


    case animateEnd :
      const a = [...state.yarnsOnPageArr];
      a.map((el)=>{
        if (el.id === action.id){
          el.animate = true;
          return;
        }
      }
    );
      return {...state, yarnsOnPageArr: a}


    case takeOffAnimate :
      let cpArr = [...state.yarnsOnPageArr];
      cpArr.map(el=>{
      if(el.id === action.id){
        el.animate = false;
        return;
      }})
      return {...state, yarnsOnPageArr: cpArr}


    case firstTimesInChoosedYarn:
      let c = [...state.yarnsOnPageArr];
      c.map(el=>{
        if (el.id === action.id){
          el.finishAnimate = true;
          return;
        }
      })
      return {...state, yarnsOnPageArr: c}


    case removedElement :
      const f = [...state.listYarn];
      f.map(el=>{
        if (el.id === action.id){
          el.remove = false;
        }
      });
      return {...state, listYarn: f}

    case adviceMobileToggle :
      return {...state, adviceMobileToggle: !state.adviceMobileToggle}


    case clearInputDataSearch:
      return {...state, searchYarnInputValue: ""}

      case firstSendingImage :
          return {...state, firstSendingImage:!state.firstSendingImage}
      case addTemporarilyImage :
          return {...state, temporarilyImage : [...state.temporarilyImage, action.payload]}

      case clearTemporarilyImage:
          const emp = [];
          return {...state, temporarilyImage: emp}

      case changeCropData:
          return {
              ...state, changeCroppedImage:action.payload,
          }

    default:  return state;
  }
}

