import {
    paginatorData,
    receiveWorks,
    removeCard, setLkCategory, setTrueAfterDeletingWork, toggleLoading,
} from '../types/types';
import { initialState } from "./state";
import {previewWorkLoaded, togglePreviewWork} from '../../../contest-editable/src/types/types';


export function rootReducers(state = initialState, action) {
  switch (action.type) {
      case togglePreviewWork:
          return {...state, openPreview:!state.openPreview}

      case previewWorkLoaded:
          return {...state, previewWorkLoaded:action.payload}

    case toggleLoading:
      return {...state, loading: !state.loading}

    case setLkCategory : return {...state, lkCategory: action.tabsValue};

      case removeCard :
          const arr = [...state.works];
      let removedArray = arr.filter(el=>{
          return el.id.toString() !== action.id});
      return {...state, works: removedArray};

    case receiveWorks:

      return {...state, works: action.arr, loading: false}
    case paginatorData:
      return {
        ...state, paginator: action.paginator,
      }

      case setTrueAfterDeletingWork:
        return {
            ...state,allowCreate:true,
        }
    default:
      return state;
  }
}
