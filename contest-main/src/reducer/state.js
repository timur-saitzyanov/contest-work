
import Data from '../../../../data';

const data = new Data("page");
console.log(data);
export const initialState = {
    openPreview:false,
    previewWorkLoaded:false,
  customer: data?.customer?.id,
  urlForLike:data.resources.like,
  filterCategory: '',
  winnerCategory: "1",
  categoryArray:data.categories,
  data,
  mainItems:data.works,
  winnerItems:data.previousWinners,
  preview: true,
    dataLikeModal : {},
  previewData: [],
    loading:false,
};
