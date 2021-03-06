import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
