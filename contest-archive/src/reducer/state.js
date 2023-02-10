
import Data from '../../../../data';

const data = new Data("page");

export const initialState = {
    openPreview:false,
    previewWorkLoaded:false,
  loading:false,
  filterCategory: 'all',
  paginator:data.paginator,
  categoryArray:data.categories,
  data,
  works:data.works,
  sortVote: "Больше голосов",
};
