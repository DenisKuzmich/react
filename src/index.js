import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


 let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} 
      dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);

reportWebVitals();
