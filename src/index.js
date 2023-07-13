import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store';
import RouterComponent from './router';

const root = document.getElementById('root');
const loadAuthState = () => {
  const authState = localStorage.getItem('authState');
  if (authState) {
    store.dispatch({ type: 'LOAD_AUTH_STATE', payload: JSON.parse(authState) });
  }
};
loadAuthState();

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterComponent/>
    </Provider>
  </React.StrictMode>
);