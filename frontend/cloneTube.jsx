import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded',() => {
  let store;
  if (window.currentUser) {
    const preLoadedState = {
      entities: {users: {[window.currentUser]: window.currentUser}},
      session: {id: window.currentUser.window}
    };
    store=configureStore(preLoadedState);
    window.currentUser = null;
  } else {
    store=configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})
