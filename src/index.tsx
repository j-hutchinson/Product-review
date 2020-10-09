import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/component';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

