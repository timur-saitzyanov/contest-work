import React from 'react';
import { useSelector } from 'react-redux'
import "./app.scss";
import ArchiveContest from './archiveContestComponents/archiveContest';



function App() {
  const d = useSelector(state=>state.data);
  //console.log("data", d);

  return (
    <div className="App">
      <ArchiveContest />
    </div>
  );
}

export const AppMemo = React.memo(App);
