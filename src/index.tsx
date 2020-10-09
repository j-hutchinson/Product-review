import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/component';
import store from './store/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
