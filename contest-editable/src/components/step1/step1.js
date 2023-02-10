import React from 'react';
import './step1.scss';
import TitleInitial from './step1components/titleInitial/titleInitial';
import BtnList from './step1components/btnList/btnList';
import BlockStep1 from './step1components/blockStep1/blockStep1';
import MainWrapper from './step1components/mainWrapper/mainWrapper';
import MainBtn from './step1components/main-btn/main-btn';
import BottomWrapper from './step1components/bottom-wrapper/bottom-wrapper';
import BlockStep2 from './step1components/blockStep2/blockStep2';
import {useSelector} from 'react-redux';


const Step1 = () => {
  let data = useSelector((state) => state);
  let status1stepBtn = data.step1BtnActive;
  return (
      <section>
        <div className="contest-work-initial__container">
          <TitleInitial/>
          <MainWrapper>
            <BtnList/>
            <BlockStep1/>
          </MainWrapper>
          <BottomWrapper>

          <MainBtn isActive={status1stepBtn}/>

            <BlockStep2/>
          </BottomWrapper>
        </div>
      </section>

  );
};

export const Step1Memo = React.memo(Step1)
