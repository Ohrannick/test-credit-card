import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './reducers';
import { Provider } from 'react-redux';
import AppForm from './components/appform/AppForm';
import App from './components/App';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    {/* <AppForm /> */}
    <App />
  </Provider>,
  document.getElementById('root')
);
