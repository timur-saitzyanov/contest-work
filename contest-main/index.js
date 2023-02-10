import React from 'react';
import ReactDOM from 'react-dom';
import  {AppMemo} from './src/components/App';
import { store } from './src/store';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <AppMemo/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('contest-main')
);
