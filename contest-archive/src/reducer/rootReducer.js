import {
  setCategory, setVote, loading, changePaginatorData, getWorks,
} from '../types/types';
import { initialState } from "./state";
import {previewWorkLoaded, togglePreviewWork} from '../../../contest-editable/src/types/types';


export function rootReducers(state = initialState, action) {

  switch (action.type) {
      case togglePreviewWork:
          return {...state, openPreview:!state.openPreview}

      case previewWorkLoaded:
          return {...state, previewWorkLoaded:action.payload}
    case setCategory:
      return {...state, filterCategory : action.filterValue};

    case setVote :
      return {...state, sortVote: action.sortValue, }

    case loading :
      return {...state, loading: !state.loading};

    case changePaginatorData:
      return {...state, paginator:action.data};

    case getWorks:
      return {...state, works: action.works}
    default:
      return state;
  }
}
