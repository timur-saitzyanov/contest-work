import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './archiveContest.scss';
import FilterVoteMobile from './FilterVoteMobile/FilterVoteMobile';
import WrapperCards from '../../../../contest-main/src/components/mainContestComponents/wrapper-cards/wrapper-cards';
import WrapperCard from '../../../../contest-main/src/components/mainContestComponents/wrapper-card/wrapper-card';
import AvatarInCard from '../../../../contest-main/src/components/mainContestComponents/avatar-in-card/avatar-in-card';
import UserNameInCard from '../../../../contest-main/src/components/mainContestComponents/username-in-card/username-in-card';
import TitleCard from '../../../../contest-main/src/components/mainContestComponents/title-card/title-card';
import DescriptionCard from '../../../../contest-main/src/components/mainContestComponents/description-composition-card/description-composition-card';
import TitleAndDescription from '../../../../contest-main/src/components/mainContestComponents/title&description-composition/title&description-composition';
import IconAndCountLikeInCard from '../../../../contest-main/src/components/mainContestComponents/icon&count-like-in-card/icon&count-like-in-card';
import LikeIcon from '../../../../contest-main/src/components/mainContestComponents/like-icon/like-icon';
import LikeCount from '../../../../contest-main/src/components/mainContestComponents/like-count/like-count';
import BtnList from './btnList/btnList';
import {TransitionReferences} from './transition-references/transition-references';
import {FilterVoteLargeScreen} from './FilterVoteLargeScreen/FilterVoteLargeScreen';
import {Margin} from './margin/margin';
import SliderImageDotsInCard from '../../../../contest-main/src/components/mainContestComponents/slider-image-dots-in-card/slider-image-dots-in-card';
import AvatarAndName from '../../../../contest-main/src/components/mainContestComponents/avatar&name-in-card/avatar&name-in-card';
import {setCategory_action, togglePreviewWork_action} from '../../../../contest-main/src/actions/actions';
import Pagination from '../../../../../components/Pagination';
import {changePaginatorData_action, getWorks_action, loading_action} from '../../actions/actions';
import {getNewData} from './recieveNewData/getNewData';
import {LoaderBlue} from './LoaderBlue/LoaderBlue';
import $ from 'jquery';
import {previewWorkLoaded_action} from '../../../../contest-editable/src/actions/actions';
import {showNoty} from '../../../../../helpers';
import {PreviewWorkInModal} from '../../../../contest-editable/src/components/step3/step3components/previewWorkInModal/previewWorkInModal';


const ArchiveContest = React.memo(()=> {
  const dispatch = useDispatch();
  const paginator = useSelector(state=>state.paginator);
  const [activePage,setActivePage] = useState(0);
  const filterValue = useSelector(state=>state.filterCategory);
  const sortingValue = useSelector(state=>state.sortVote);
  const statusLoading = useSelector(state=>state.loading);
    const [previewWork, setPreviewWork] = useState({});
    const openPreviewInCard = function(e){
        console.log(e);
        const id = e;
        dispatch(togglePreviewWork_action());
        $.ajax({
            method:"GET",
            url:`/api/works/show/${id}`,
            success:(e)=> {
                console.log(e, 'работа получена');
                setPreviewWork(e.success);
                dispatch(previewWorkLoaded_action(true));
            },
            error:(error)=>{
                showNoty("error", error.responseJSON.message)
                console.log(error);
            },
        })
    }

  console.log(statusLoading, "statusLoading");

  let data;
  try{
    data = useSelector((state) => state.works);
  }catch (e) {
    console.error(e);
  }
  let element;
  try {
    element = data.map((el) => (
        <WrapperCard key={el.id}  dataValue={el.id}>
          <Margin mf={16}>
            <AvatarAndName>
              <AvatarInCard  imgUrl={el.customer.image}/>
              <UserNameInCard  userName={el.customer.name}/>
            </AvatarAndName>
          </Margin>

          <SliderImageDotsInCard onClick={()=>openPreviewInCard(el.id.toString())}  arrCardsImages={el.images}/>

          <TitleAndDescription>
            <TitleCard  titleCard={el.title.slice(0, 38)}/>
            <DescriptionCard  composition={el.text}/>
          </TitleAndDescription>
          <IconAndCountLikeInCard archive={true} place={el.place}>
            <LikeIcon  archive={true} />
            <LikeCount archive={true} countLike={el.likes}/>
          </IconAndCountLikeInCard>
        </WrapperCard>
      ),
    );
  }catch (e) {
    console.error(e);
  }
  const btnsValue = {
    f:(e)=>{
      return setCategory_action(e.target.value)
    },
    val: useSelector((state) => state.filterCategory),
    arr: useSelector(state=>state.categoryArray)
  }

  useEffect(()=>{
      console.log('filter value', filterValue);
    getNewData(filterValue, sortingValue, activePage+1 ).then(body=> {
      dispatch(loading_action());
        return body.json();
      }).then((data)=>{
        console.log(data);
        dispatch(getWorks_action(data.works));
        dispatch(changePaginatorData_action(data.paginator));
      })
      .catch(e=>{
        console.error(e);
      })
      .finally(()=> {
        console.log('finally');
         dispatch(loading_action());
      }  )
  },[activePage, filterValue, sortingValue]);


  return (
    <div  className="main-contest-app">
      <TransitionReferences />
        <PreviewWorkInModal work={previewWork}/>
      <h1 className={"archive-main-title"}>
        Архив конкурсных работ
      </h1>
      <BtnList btnsValue={btnsValue}/>
      <FilterVoteLargeScreen />
      <FilterVoteMobile/>
      <WrapperCards>

        {
          statusLoading ? <LoaderBlue/>:
          element
        }
      </WrapperCards>
      <Margin mt={60}>
        <div className={"wrapperForPaginator"}>
          <Pagination pages={Math.ceil(paginator.total / paginator.limit) || 1} activeIndex={activePage} setActiveIndex={setActivePage}/>
        </div>
      </Margin>
    </div>
  );
})

export default ArchiveContest;
