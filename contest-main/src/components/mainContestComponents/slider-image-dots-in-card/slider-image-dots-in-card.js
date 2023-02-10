import React, {useEffect, useRef} from 'react';
import './slider-image-dots-in-card.scss';
import './_card-new.scss';
import './image-slider';
import GetImageToUri from '../../../../../../GetImageToUri';

const SliderImageDotsInCard = ({arrCardsImages, inLk=false, children, onClick=()=>''}) => {
  let dotsUlLi = useRef();
  if (!arrCardsImages) {
    return null;
  }
  if (arrCardsImages.length === 1) {
    useEffect(() => {
      dotsUlLi.current.style.visibility = 'hidden';
    }, []);
  }
  return (
    <div onClick={onClick} className="card-new card-new--contest-lk">

      <div className="card-new__image-holder" data-images-slider="">
          {arrCardsImages.length === 0 && inLk && <img style={inLk && window.innerWidth >= 1600 ?{'maxHeight':'318px','minHeight':'auto' }:{}} src='/icons/contest-icons/upload.svg' alt='noPhotoImage'/>}
        {
          arrCardsImages.map((el, index) => (
            <a key={index} className="card-new__image" style={index === 0
              ? {display: 'block'}
              : {display: 'none'}} data-image-slider={index}>
              <GetImageToUri imgProps={{
                    style:inLk && window.innerWidth >= 1600 ?{'maxHeight':'318px','minHeight':'auto' }:{},
              }}  image={el} params={`crop/380-380`}/>
            </a>
          ))
        }
      </div>
      {children}
      <div className="card-new__text full" ref={dotsUlLi}>
        <ul className="card-new__points" data-images-controls="">
          {
            arrCardsImages.map((el, index)=>(
              <li key={index} className={index === 0 ? "card-new__point active" : "card-new__point"} data-images-control-index={index}/>
            ))
          }
        </ul>
      </div>

    </div>
  );
};
export default SliderImageDotsInCard;
