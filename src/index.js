import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Load Config File
import configs from './config.json'; 

import App from './App';

// Set Axios Base URL
axios.defaults.baseURL = configs.CAT_API_URL;
axios.defaults.headers.common['x-api-key'] = configs.CAT_API_KEY;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);