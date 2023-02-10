import React, {useCallback, useEffect, useState} from 'react';
import './main-content-app.scss';
import TitleSelectedItem from '../title-selected-item/title-selected-item';
import Subtitle from '../subtitle/subtitle';
import WrapperCards from '../wrapper-cards/wrapper-cards';
import AddWorkCard from '../add-work-card/add-work-card';
import HrLine from '../hr-line/hr-line';
import WrapperIconsLabel from '../wrapper-icons-label/wrapper-icons-label';
import IconAndTitleWrapper from '../Icon&TitleWrapper/Icon&TitleWrapper';
import Icon from '../icon/icon';
import TitleUnderIcon from '../title-under-icon/title-under-icon';
import BigBtn from '../big-btn/big-btn';
import {useDispatch, useSelector} from 'react-redux';
import {DateSendWork} from '../dateSendWork/dateSendWork';
import {lkCategory_action, receiveWorks_action} from '../../../actions/actions';
import {LkTooltip} from '../lk-tooltip/lk-tooltip';
import WrapperCard from '../../../../../contest-main/src/components/mainContestComponents/wrapper-card/wrapper-card';
import AvatarAndName from '../../../../../contest-main/src/components/mainContestComponents/avatar&name-in-card/avatar&name-in-card';
import SliderImageDotsInCard from '../../../../../contest-main/src/components/mainContestComponents/slider-image-dots-in-card/slider-image-dots-in-card';
import TitleAndDescription from '../../../../../contest-main/src/components/mainContestComponents/title&description-composition/title&description-composition';
import TitleCard from '../../../../../contest-main/src/components/mainContestComponents/title-card/title-card';
import DescriptionCard from '../../../../../contest-main/src/components/mainContestComponents/description-composition-card/description-composition-card';
import IconAndCountLikeInCard from '../../../../../contest-main/src/components/mainContestComponents/icon&count-like-in-card/icon&count-like-in-card';
import LikeIcon from '../../../../../contest-main/src/components/mainContestComponents/like-icon/like-icon';
import LikeCount from '../../../../../contest-main/src/components/mainContestComponents/like-count/like-count';
import {TabsCategoryMemo} from '../../../../../contest-main/src/components/mainContestComponents/tabs-category/tabs-category';
import {Margin} from '../../../../../contest-archive/src/components/archiveContestComponents/margin/margin';
import {LoaderBlue} from '../../../../../contest-archive/src/components/archiveContestComponents/LoaderBlue/LoaderBlue';
import {PreviewWorkInModal} from '../../../../../contest-editable/src/components/step3/step3components/previewWorkInModal/previewWorkInModal';
import {togglePreviewWork_action} from '../../../../../contest-main/src/actions/actions';
import $ from 'jquery';
import {previewWorkLoaded_action} from '../../../../../contest-editable/src/actions/actions';
import {showNoty} from '../../../../../../helpers';


const MainContentApp = () => {
  const dispatch = useDispatch();
  const statusLoading = useSelector(state=>state.loading);
  const countAllowed = useSelector(state=>state.countAllowedWork);
    const [previewWork, setPreviewWork] = useState({});
    const openPreviewInCard = function(e){
        const id = e;
        dispatch(togglePreviewWork_action());
        $.ajax({
            method:"GET",
            url:`/api/works/show/${id}`,
            success:(e)=> {
                setPreviewWork(e.success);
                dispatch(previewWorkLoaded_action(true));
            },
            error:(error)=>{
                showNoty("error", error.responseJSON.message)
                console.log(error);
            },
        })
    }
  function closeTooltip(e){
    if (!e.target.closest(".tooltip_lk")){
      let allTooltip = document.querySelectorAll(".tooltip_lk-content");
      allTooltip.forEach(el=>el.style.visibility = "hidden");
    }
  }
    const categoryValue = useSelector(state=>state.lkCategory);
  useEffect(()=>{
    fetch(`/profile/works/list?filter[work_category_id]=${categoryValue}`).then((obj)=>{

      return  obj.json();

    }).then(data=>{
        console.log(data, 'useEffectRecieved');
        let arr = data.works;
        dispatch(receiveWorks_action(arr));
      })
      .catch(e=> console.error(e))
      .finally(()=>{
      })
  },[categoryValue])


  const tabsValues = {
    f:(e)=>{
      return lkCategory_action(e.target.value)
    },
    val:useSelector(state=>state.lkCategory),
    arr:useSelector(state=>state.data.categories)
  }

  let works = useSelector(state=>state.works);
  let itemsCard = works.map((elem) => (
    <WrapperCard key={elem.id} lk={true} place={elem.place}  dataValue={elem.id}>
     <Margin mf={16}>
       <AvatarAndName
           id={elem.id}
         moderationLK={elem.moderation} status={elem.state} archiveLK ={false}
         lk={true}
         place={elem.place}
       >
         <LkTooltip edited={elem.state.name === 'draft' || elem.state.name === 'rejected'} id={elem.id}/>
       </AvatarAndName>
     </Margin>

      <SliderImageDotsInCard onClick={()=>openPreviewInCard(elem.id.toString())}  inLk={true}  arrCardsImages={elem.images}/>
      <TitleAndDescription>
        <TitleCard  titleCard={elem.title?.slice(0, 38)}/>
        <DescriptionCard  composition={elem.text}/>
      </TitleAndDescription>
      <div className={"wrap-for-lk"}>
        <IconAndCountLikeInCard lk={true} place={elem.place} >
        {elem.likes ? <>
          <LikeIcon lk={true} place={elem.place} archive={elem.archive} />
          <LikeCount lk={true} place={elem.place}  countLike={elem.likes}/>
          </>
        : null
        }
        </IconAndCountLikeInCard>
        <DateSendWork date={elem.created_at}/>
      </div>


    </WrapperCard>
  ));
  const correctEnd = useCallback(function declOfNum(n, text_forms) {
      n = Math.abs(n) % 100;
      const n1 = n % 10;
      if (n > 10 && n < 20) { return text_forms[2]; }
      if (n1 > 1 && n1 < 5) { return text_forms[1]; }
      if (n1 == 1) { return text_forms[0]; }
      return text_forms[2];
  }, countAllowed);
  const arrDates = useSelector(state=>state.datesOfPublic);
  return (
    <section onClick={closeTooltip} className="main-contest-my-works-personal-profile-main-block">
      <TitleSelectedItem/>
        <PreviewWorkInModal work={previewWork}/>
      <Subtitle text={`Вы можете добавить ${countAllowed} ${correctEnd(countAllowed, ['конкурсную работу', 'конкурсные работы', 'конкурсных работ'])}`} />
      <Subtitle text={"Ближайшие конкурсы стартуют:"} arrDates={arrDates}/>
      <TabsCategoryMemo tabsValues={tabsValues}/>

      {statusLoading ? <LoaderBlue/> :
        <>  <WrapperCards>


          <AddWorkCard lengthCard={itemsCard?.length} text={'Добавить работу'}/>
          {itemsCard}
            </WrapperCards>
        <Margin mt={60}>
        <div className={"wrapperForPaginator"}>
        </div>
        </Margin>

        </>

      }

      <HrLine/>
     <WrapperIconsLabel>
       <IconAndTitleWrapper>
         <Icon iconName={'img-v'}/>
         <TitleUnderIcon title={'Выкладывайте фото своих вязаных работ'}/>
       </IconAndTitleWrapper>
       <IconAndTitleWrapper>
         <Icon iconName={'every-week'}/>
         <TitleUnderIcon title={'Участвуйте в конкурсе каждую неделю'}/>
       </IconAndTitleWrapper>
       <IconAndTitleWrapper>
         <Icon iconName={'star'}/>
         <TitleUnderIcon title={'Выигрывайте до 500 рублей'}/>
       </IconAndTitleWrapper>
     </WrapperIconsLabel>
     <BigBtn btnText={'Посмотреть условия конкурса'}/>
    </section>

  );
};
export default MainContentApp;
