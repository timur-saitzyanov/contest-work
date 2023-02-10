import React from 'react';
import "./App.scss";
//import PrivateRoomApp from './private-room-components/private-room-app/private-room-app';
import MainContentApp from './main-components/main-content-app/main-content-app';
import {useSelector} from 'react-redux';


const App = ()=> {
  const data = useSelector(state=>state.data);
  console.log(data)
  return (
    <main className="main-contest-my-works-personal-profile">
      {/*<PrivateRoomApp/>*/}
      <MainContentApp/>
    </main>
  )
}
export default  App;
