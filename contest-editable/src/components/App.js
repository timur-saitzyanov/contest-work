import React from 'react';
import {useTransition, animated} from 'react-spring';
import './App.scss';
import {Switch, Route, withRouter, useLocation} from 'react-router-dom';
import {Step1Memo} from './step1/step1';
import  {Step2Memo} from './step2/step2';
import  {Step3Memo} from './step3/step3';
import StepLine from './step-line/step-line';
import LinkBack from './linkBack/linkBack';
import SaveChangesText from './saveChangesText/saveChangesText';

const App = () => {

  const location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    from: {opacity: 0, position:"absolute", transform: 'translate3d(-200%, 0,0)'},
    enter: {opacity: 1,position:"relative" ,transform: 'translate3d(0%, 0%,0)'},
    leave: {opacity: 0,position:"absolute" ,transform: 'translate3d(200%, 0,0)'},
    config: {duration: 150},
  });

  return (
    <section style={{position: 'relative'}}>
      <div className="top-app">
        <LinkBack/>
        <SaveChangesText/>
        <StepLine/>
      </div>
      <div style={{overflow: 'hidden', position: 'relative'}}>
        {transitions.map(({item, props, key}) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={withRouter(Step1Memo)}/>
              <Route exact path="/step2" component={withRouter(Step2Memo)}/>
              <Route exact path="/step3" component={withRouter(Step3Memo)}/>

            </Switch>
          </animated.div>
        ))}
      </div>
    </section>
  );
};

export const MemoApp = React.memo(App);






