import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getUsers } from './actions/users';

import App from './App';
import './index.css';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));
store.dispatch(getUsers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
