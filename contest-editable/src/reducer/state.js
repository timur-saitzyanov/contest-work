const data = JSON.parse(document.getElementById('contest-editable').getAttribute('data-json'));
console.log(data);
let arr = data.current_works?.[0]?.available_product_mods;

if (arr){
   arr.forEach((el,index)=>{
       el.id = (el.product_mod_id ? el.product_mod_id : el.product_id).toString();
       el.i = index;
       el.selected = false;
       el.animate = false;
   });
}
export const initialState = {
    previewWorkLoaded:false,
    openPreview:false,
    successModalStatus:false,
  idWorkForEmptyUrl : data.current_works ? data.current_works[0].id : '',
  currentWork : data?.current_works,
  backData: data,
  categoryContestArr:data.categories,
  categoryContestWork: data.current_works?.[0]?.work_category_id ?? '',
  step1:data.current_works?.[0]?.work_category_id ? false : true,
  step1BtnActive:data.current_works?.[0]?.work_category_id ? true : false,
  step1Ready: data.current_works?.[0]?.work_category_id ? true : false,


  step2: data.current_works?.[0]?.work_category_id ? true : false,
  step2Ready: data.current_works?.[0]?.title?.length > 3 && data.current_works?.[0]?.elements.find(el=>el.type === 'image'),
  step2BtnActive:false,
  titleOfWork: data.current_works?.[0]?.title ?? '',
  editors:data.current_works?.[0]?.elements ?? [],
  firstSendingImage:false,
  modalDropzone: false,
  temporarilyImage:[],
  changeCroppedImage:false,
  cropData : null,
  statusOfCropped:false,


  step3: data.current_work?.title?.length > 3 && data.current_work?.elements.find(el=>el.type === 'image'),
  step3IsTablet:false,
  blockChoice:false,
  step3BtnActive:false,
  step3Ready: false,
  adviceMobileToggle: false,
  modalYarn : false,
  searchYarnInputValue:'',
  yarnsOnPageArr : [],
  listYarn: arr,
  // [ 
  //   {
  //     i:0,
  //     val:'Flize Baby Best',
  //     imgYarn: '/icons/contest-icons/temporarily/yarn-small.jpg',
  //     title: '1Alize Baby Best',
  //     description: '(Оранжевый)',
  //     numberOfColor: "100",
  //     id: "9zVLQ8BeQO9dU1hXEhBex",
  //     selected:false,
  //     animate:false,
  //   },
  // ],

  linkSocialNetwork:data.current_works?.[0]?.social_link ?? '',
  datesOfPublic: data.start_dates,
  selectedDate: data.start_dates[0].id,
};
