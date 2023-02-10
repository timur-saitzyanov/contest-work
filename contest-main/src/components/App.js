import React from 'react';
import "./app.scss";
import  {MainContestMemo} from './mainContestComponents/mainContest';

function App() {
  return (
    <div className="App">
      <MainContestMemo/>
    </div>
  );
}

export const AppMemo = React.memo(App);
