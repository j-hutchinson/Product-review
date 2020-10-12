import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/component';
import { StoreProvider } from './store/StoreProvider';

render(
  <StoreProvider >
    <App />
  </StoreProvider>,
  document.getElementById('root')
);
