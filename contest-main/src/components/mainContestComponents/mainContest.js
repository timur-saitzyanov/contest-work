import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './mainContest.scss';
import AvatarAndName from './avatar&name-in-card/avatar&name-in-card';
import WrapperCards from './wrapper-cards/wrapper-cards';
import WrapperCard from './wrapper-card/wrapper-card';
import AvatarInCard from './avatar-in-card/avatar-in-card';
import UserNameInCard from './username-in-card/username-in-card';
import TitleCard from './title-card/title-card';
import DescriptionCard from './description-composition-card/description-composition-card';
import TitleAndDescription from './title&description-composition/title&description-composition';
import IconAndCountLikeInCard from './icon&count-like-in-card/icon&count-like-in-card';
import LikeIcon from './like-icon/like-icon';
import LikeCount from './like-count/like-count';
import {TakePart} from './take-part/take-part';
import BtnList from './btnList/btnList';
import {ArchiveLink} from './archive-link/archive-link';
import SliderImageDotsInCard from './slider-image-dots-in-card/slider-image-dots-in-card';
import {ReactSVG} from 'react-svg';
import {TabsCategoryMemo} from './tabs-category/tabs-category';
import {WinnerWrap} from './winnerWrap/winnerWrap';
import {ArchiveLinkMobile} from './archive-link-mobile/archive-link-mobile';
import {TransitionReferences} from './transition-references/transition-references';
import {Margin} from '../../../../contest-archive/src/components/archiveContestComponents/margin/margin';
import {setCategory_action, togglePreviewWork_action, winnerCategory_action, getWorks_action, loading_action, toggleLike_action} from '../../actions/actions';
import {PreviewWorkInModal} from '../../../../contest-editable/src/components/step3/step3components/previewWorkInModal/previewWorkInModal';
import $ from 'jquery';
import {showNoty} from '../../../../../helpers';
import {previewWorkLoaded_action} from '../../../../contest-editable/src/actions/actions';
import {LoaderBlue} from '../../../../contest-archive/src/components/archiveContestComponents/LoaderBlue/LoaderBlue';


const MainContest = ()=> {
    const dispatch = useDispatch();
    const [previewWork, setPreviewWork] = useState({});
    const statusLoading = useSelector(state=>state.loading);
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
  const tabsValues = {
    f:(e)=>{
      return winnerCategory_action(e.target.value)
    },
    val:useSelector(state=>state.winnerCategory),
    arr:useSelector(state=>state.categoryArray)
  }
  const btnsValue = {
    f:(e)=>{
      return setCategory_action(e.target.value)
    },
    val: useSelector((state) => state.filterCategory),
    arr: useSelector(state=>state.categoryArray)
  }
  const valCategory = useSelector((state) => state.filterCategory);
    useEffect(()=>{
        fetch(`/contest/index?current=1${valCategory == '' ? '' : '&filter[work_category_id]='+valCategory}`, {
            method:"GET",
            headers:{
                'X-CSRF-TOKEN': app.token,
                'x-requested-with': 'XMLHttpRequest',
            }
        }).then((data)=>{
            dispatch(loading_action());
            return data.json();
        }).then(body=>{
            dispatch(getWorks_action(body.works));
            console.log(body)
        }
        ).catch((e)=>console.error(e)).finally(()=>{
            dispatch(loading_action());
        })
    },[valCategory])
  let data;
  try{
      data = useSelector((state) => state.mainItems);
  }catch (e) {
      console.log(e)
  }
  let winnerData;
  try{
      winnerData = useSelector(state => state.winnerItems);
  }catch (e) {
      console.log(e)
  }
    const url = useSelector(state=>state.urlForLike);
    const customer = useSelector(state=>state.customer);
    function likeToggle(dataValue, customer, url){

        if (!customer){
            document.querySelector('[data-target="#modal-login"]').click();
        }else {
            $.ajax({
                method:'POST',
                url:url,
                data:{
                    work_id: dataValue,
                    customer_id: customer,
                },
                success:(e)=> {

                    console.log(e);
                    showNoty("success", e.message);
                    dispatch(toggleLike_action(e.total, dataValue, e.message == "Голос удалён" ? false : true));
                    //setActLike({
                    //    liked:e.message == "Голос удалён" ? false : true,
                    //    count:e.total,
                    //})
                },
                error:(error)=>{
                    showNoty("error", error.responseJSON.message)
                    console.log(error)
                }
            })
        }

    }

  let winnerCategory;
  try{
      winnerCategory = useSelector(state=>state.winnerCategory);
  }catch (e) {
      console.error(e)
  }

    let element;
    try{
        element = data.map((el) => (
                <WrapperCard key={el.id.toString()}>
                    <Margin mf={el.customer.name ? 16 : 0}>
                        <AvatarAndName>
                            <AvatarInCard imgUrl={el.customer.image}/>
                            <UserNameInCard userName={el.customer.name}/>
                        </AvatarAndName>
                    </Margin>

                    <SliderImageDotsInCard onClick={()=>openPreviewInCard(el.id.toString())}  arrCardsImages={el.images}/>

                    <TitleAndDescription>
                        <TitleCard titleCard={el.title.slice(0, 38)}/>
                        <DescriptionCard composition={el.text}/>
                    </TitleAndDescription>

                    <IconAndCountLikeInCard likeToggle={()=> likeToggle(el.id, customer, url)} countLike={el.likes} place={el.place} archive={el.archive} liked={el.liked} active={el.active} dataValue={el.id} key={el.id}/>
                </WrapperCard>
            ),
        );
    }catch (e) {
        console.error(e);
    }




  let winnerItems = winnerData.filter((el)=>el.work_category_id.toString() === winnerCategory).map((el) => (
    <WrapperCard place={el.place} key={el.id} dataValue={el.id}>
      <Margin  mf={el.customer.name ? 16 : 0}>
        <AvatarAndName  place={el.place}>
          <AvatarInCard  imgUrl={el.customer.image}/>
          <UserNameInCard place={el.place} key={el.id} userName={el.customer.name}/>
        </AvatarAndName>
      </Margin>
      <SliderImageDotsInCard onClick={()=>openPreviewInCard(el.id.toString())}  arrCardsImages={el.images} />
      <TitleAndDescription>
        <TitleCard titleCard={el.title}/>
        <DescriptionCard place={el.place} composition={el.text}/>
      </TitleAndDescription>
      <IconAndCountLikeInCard liked={el.liked}  dataValue={el.id} place={el.place} key={el.id}>
        <LikeIcon place={el.place} archive={el.archive} />
        <LikeCount place={el.place} countLike={el.likes}/>
      </IconAndCountLikeInCard>
    </WrapperCard>
  ));

  return (
    <div className="main-contest-app">
      <TransitionReferences/>
        <PreviewWorkInModal canLike={true} work={previewWork}/>
      <TakePart />
      <ArchiveLinkMobile countArchiveWork={useSelector(state => state.mainItems.length)}/>
      <BtnList btnsValue={btnsValue}/>
      <ArchiveLink />
      <WrapperCards>
          {
              statusLoading ? <LoaderBlue/>:
                  element
          }
      </WrapperCards>
      <div className="winner__title">
        {window.innerWidth < 450 ? <ReactSVG src={'/icons/contest-icons/mobile-cup.svg'}/> : <ReactSVG src={'/icons/contest-icons/Cup.svg'}/>}
        <p className="winner__label">Победители прошлой недели</p>
      </div>
      <TabsCategoryMemo tabsValues={tabsValues}/>
      <WinnerWrap>
        {winnerItems}
      </WinnerWrap>

    </div>
  );
}
export const MainContestMemo = React.memo(MainContest);

