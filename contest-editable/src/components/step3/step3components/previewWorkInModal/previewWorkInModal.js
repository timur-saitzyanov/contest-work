import React, {useEffect} from 'react';
import styles from  "./previewWorkInModal.module.scss";
import Modal from "react-modal";
import {useDispatch, useSelector} from 'react-redux';
import {ReactSVG} from 'react-svg';
import $ from 'jquery';
import {previewWorkLoaded_action, togglePreviewWork_action} from '../../../../actions/actions';
import GetImageToUri from '../../../../../../../GetImageToUri';
import { ResponsiveSlickSlider } from './slick-slider-react/slick-slider-react';
import {Slide} from './slide/slide' ;

import ReactHtmlParser from 'react-html-parser';
import IconAndCountLikeInCard from '../../../../../../contest-main/src/components/mainContestComponents/icon&count-like-in-card/icon&count-like-in-card';
import AvatarAndName from '../../../../../../contest-main/src/components/mainContestComponents/avatar&name-in-card/avatar&name-in-card';
import AvatarInCard from '../../../../../../contest-main/src/components/mainContestComponents/avatar-in-card/avatar-in-card';
import UserNameInCard from '../../../../../../contest-main/src/components/mainContestComponents/username-in-card/username-in-card';
import {showNoty} from '../../../../../../../helpers';
import {toggleLike_action} from '../../../../../../contest-main/src/actions/actions';

export const PreviewWorkInModal = ({children, work, btnBottom, disabled, publicWorkFunc, canLike=false})=>{
    const v = useSelector(state=>state.dataLikeModal);
    const dispatch = useDispatch();
    const openPreview = useSelector(state => state.openPreview);
    const previewWorkLoaded = useSelector(state=>state.previewWorkLoaded);
    useEffect(()=>{
        Modal.setAppElement('body');
        dispatch(toggleLike_action(work?.likes, work?.id, work?.liked, true));
    },[previewWorkLoaded]);

    function handleAfterOpenFunc(){
        $(`.${styles['modal__contents']}`).addClass(styles['active']);
        $(`.${styles['overlay__contents']}`).addClass(styles['active']);
        document.querySelector(".ReactModal__Overlay").classList.add("o");
    }
    function handleRequestCloseFunc() {
        $(`.${styles['modal__contents']}`).removeClass(styles['active']);
        $(`.${styles['overlay__contents']}`).removeClass(styles['active']);
        setTimeout(()=>{
            dispatch(togglePreviewWork_action());
            dispatch(previewWorkLoaded_action(false))
        },300);
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
                    showNoty("success", e.message);
                    dispatch(toggleLike_action(e.total, dataValue, e.message == "Голос удалён" ? false : true, true));
                },
                error:(error)=>{
                    showNoty("error", error.responseJSON.message)
                    console.log(error)
                }
            })
        }

    }
    return <Modal
        ariaHideApp={false}
        className={styles['modal__contents']}
        isOpen={openPreview}
        onRequestClose={handleRequestCloseFunc}
        onAfterOpen={handleAfterOpenFunc}
        overlayClassName={styles['overlay__contents']}>
        <div>
            <section role={"modal"} className={styles["preview"]}>
                <button onClick={handleRequestCloseFunc} type="button" className={styles['close']} data-dismiss="modal" aria-label="Close">
                    <ReactSVG id="cross-icon" src={'/icons/contest-icons/closex.svg'}/>
                </button>
               
                <article className={styles["preview__body"]}> 
                    
                    {children}

                    {
                        !previewWorkLoaded ? <div className={styles.loaderWrap}>
                            <ReactSVG src={"/images/loader-catalog.svg"} className={styles.loaderImage}/>
                        </div> :
                            previewWorkLoaded ? <>
                                    <h2 className={styles["title-work"]}>{work?.title}</h2>
                                    {
                                        canLike ? <div className={styles['line-user']}>
                                            <AvatarAndName>
                                                <AvatarInCard imgUrl={work?.customer.image}/>
                                                <UserNameInCard userName={work?.customer?.split_title?.first_name}/>
                                            </AvatarAndName>
                                            <IconAndCountLikeInCard likeToggle={()=>likeToggle(work?.id, customer, url)} style={{margin:0}} countLike={v.likes} place={work?.place} archive={work?.archive} liked={v.liked} active={work?.active} dataValue={work?.id} key={work?.id}/>
                                        </div> : null
                                    }
                                    <div className="arrOfElements">
                                        {
                                            work?.elements.map((el, index)=>{
                                                if (el.type === 'image'){
                                                    return <div key={index} className={styles.previewImage}><GetImageToUri params={`resize/768-0`} image={el.image[0]}/></div>
                                                }  else if (el.type === 'text') {
                                                    return <div key={index} className={styles.previewText}>{ReactHtmlParser(el.text)}</div>
                                                } else return null
                                            })
                                        }
                                    </div>
                                    {work.social_link?.length > 4 &&  <p className={styles.linkSocialTitle}>Ссылка на социальную сеть</p>}
                                    <a className={styles.previewLinkSocialValue} href={work.social_link}>{work.social_link}</a>
                                    <hr className={styles.previewHr}/>
                                    <p className={styles.usedYarnTitle}>В данной конкурсной работе использовали пряжу</p>
                                    <div className={styles.yarnSliders}>
                                        { innerWidth > 480 ?
                                            <ResponsiveSlickSlider>
                                            {
                                                work?.current_product_mods?.map((el, index)=>{
                                                   return <Slide slide={el} key={index}/>
                                                })
                                            }
                                            </ResponsiveSlickSlider>
                                            :<div className={styles.yarnMobileWrapp}>
                                              {
                                                work?.current_product_mods?.map((el, index)=>{
                                                   return <Slide slide={el} key={index}/>
                                                })
                                                }
                                            </div>}


                                    </div>
                                </> : null


                    }

                            {btnBottom ? <button onClick={publicWorkFunc} disabled={disabled} className={disabled ? 'step3preview__btnPreviewBottom disabled' : 'step3preview__btnPreviewBottom'}>Опубликовать</button> : null}

                </article>
            </section>
        </div>
    </Modal>
}
