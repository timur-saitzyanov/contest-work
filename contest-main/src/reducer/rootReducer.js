import {dataLike, setCategory, setVote, setWinner, toggleLike, togglePreview} from '../types/types';
import { initialState } from "./state";
import {previewWorkLoaded, togglePreviewWork} from '../../../contest-editable/src/types/types';
import {getWorks} from '../../../contest-archive/src/types/types';


export function rootReducers(state = initialState, action) {

  switch (action.type) {
      case togglePreviewWork:
          return {...state, openPreview:!state.openPreview}

      case previewWorkLoaded:
          return {...state, previewWorkLoaded:action.payload}
    case setCategory:
      if (action.filterValue === "1"){
        return {...state, filterCategory : action.filterValue};
      }
      if (action.filterValue === "2"){
        return {...state, filterCategory : action.filterValue};
      }
      if (action.filterValue === "3"){
        return {...state, filterCategory : action.filterValue};
      }
      return {...state, filterCategory : action.filterValue};

    case setWinner : return {...state, winnerCategory: action.tabsValue}
    case toggleLike:
        const items = [...state.mainItems];
        items.map((el)=>{
            if (el.id === action.id){
                el.likes = action.val;
                el.liked = action.liked;
            }
        })
        if (action.modalLike){
            let dataLikeModal = state.dataLikeModal;
            dataLikeModal.liked = action.liked,
            dataLikeModal.likes = action.val;
            return {...state, mainItems: items, dataLikeModal: dataLikeModal}
        }
        return {...state, mainItems: items}

    case setVote : return {...state, sortVote: action.sortValue, }
    case togglePreview :
      return {...state, preview: !state.preview};
      case getWorks:
          console.log(action.works, 'action.works');
          return {...state, mainItems: action.works}
    default:
      return state;
  }
}
