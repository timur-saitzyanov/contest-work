import React from 'react';
import ReactDOM from 'react-dom';
import {MemoApp} from './src/components/App';
import {store} from './src/store';
import {Provider} from 'react-redux';
import {HashRouter as Router, Route, withRouter} from 'react-router-dom';

window.addEventListener('DOMContentLoaded', ()=>{
    if (location.href.includes('step')){
        location.href = location.pathname
    }
})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={withRouter(MemoApp)}/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('contest-editable'),
);
