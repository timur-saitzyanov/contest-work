export const getNewData = (filterValue="", sortingValue,paginationValue)=>{
  let sorting = ``;
  if (sortingValue === "Больше голосов") sorting = `sorting[column]=likes&sorting[direction]=desc`;
  if (sortingValue === "Меньше голосов") sorting = `sorting[column]=likes&sorting[direction]=asc`;
  if (sortingValue === "Добавлено раньше") sorting = `sorting[column]=date&sorting[direction]=asc`;
  if (sortingValue === "Добавлено позже") sorting = `sorting[column]=date&sorting[direction]=desc`;
  let filter;
  if (filterValue === "all") {
    filter = 'null'
  }else {
    filter = filterValue;
  }

  return fetch(`/contest/index?current=0&filter[work_category_id]=${filter}&${sorting}&page=${paginationValue}`, {
    method:"GET",
    headers:{
      'X-CSRF-TOKEN': app.token,
      'x-requested-with': 'XMLHttpRequest',
    }
  })
}
