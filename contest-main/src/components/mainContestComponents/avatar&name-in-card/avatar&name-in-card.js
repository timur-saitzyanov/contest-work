import React from 'react';
import './avatar&name-in-card.scss';
import {ReactSVG} from 'react-svg';
import ReactTooltip from "react-tooltip";

const AvatarAndName =
  ({
     children, place,status, lk = false, dateStart = null,
     draft = false, id
   }) => {
    if (lk) {
      return (
        <div className="goods__avatar goods__avatar--lk">
          <section className="without">

              {!place && <div data-tip='' data-for={id.toString()} className={'statusOfWork'} style={{background:status.color}}><span style={{color:status.background}}>{status.title}</span></div>}
              <ReactTooltip style={{maxWidth:'232px'}} type="light"
                             id={id.toString()}
                            className={'reactTooltipMy'}
                            html={true}
                            place={'bottom'}
                            border={true}
                            getContent={() => `${status.description || 'тестовый текст'}`}
                            borderColor="rgba(226, 226, 226, 0.5)"/>
            {
              place === 1 ? <ReactSVG className={'medal-place medal-place--lk'} src={'/icons/contest-icons/1medal.svg'}/> :
                place === 2 ? <ReactSVG className={'medal-place medal-place--lk'} src={'/icons/contest-icons/2medal.svg'}/> :
                  place === 3 ? <ReactSVG className={'medal-place medal-place--lk'} src={'/icons/contest-icons/3medal.svg'}/> : null
            }

            {children}
          </section>
        </div>
      );
    }
    return (
      <div className="goods__avatar">
        {
          place === 1 ? <ReactSVG className={'medal-place'} src={'/icons/contest-icons/1medal.svg'}/> :
            place === 2 ? <ReactSVG className={'medal-place'} src={'/icons/contest-icons/2medal.svg'}/> :
              place === 3 ? <ReactSVG className={'medal-place'} src={'/icons/contest-icons/3medal.svg'}/> : null
        }
        {children}
      </div>
    );
  };
export default AvatarAndName;
