
import Data from '../../../../data';

const data = new Data("page");
console.log(data, 'data');
export const initialState = {
    openPreview:false,
    previewWorkLoaded:false,
  loading:true,
  //filterCategory: 'all',
  paginator:{
    page:1,
    total:12,
    limit:12,
  },
  categoryArray:data.categories,
  data,
  works:[],
  lkCategory: "1",
  datesOfPublic: data.start_dates,
  allowCreate:data.createAllowed,
  countAllowedWork : data.availableWorksCount,
};
