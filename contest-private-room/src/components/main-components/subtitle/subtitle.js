import React from 'react';
import './subtitle.scss';

const Subtitle = ({text, arrDates=[]}) => {
  let insideTextClass = 'main-contest-my-works-personal-profile-main-block__subtitle--bold';

  return (
    <h3 className="main-contest-my-works-personal-profile-main-block__subtitle">
      {text}
      {arrDates.length > 0 ?
        <>
          <span className={insideTextClass}>
          {new Date(arrDates[0].start_date).toLocaleDateString('ru', {month: 'long', day: 'numeric'})}
          </span>
          {/*<span className={insideTextClass}>и</span>*/}
          {/*<span className={insideTextClass}>*/}
          {/*{new Date(arrDates[1].start_date).toLocaleDateString('ru', {month: 'long', day: 'numeric'})}*/}
          {/*</span>*/}
        </>
        : null }
    </h3>
  );
};
export default Subtitle;
