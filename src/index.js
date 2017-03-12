import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './reducers';

let store = createStore(
  appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const routes = {
  path: '/',
  component: require('./App').default,
  indexRoute: require('routes/Home'),
  childRoutes: [
    require('routes/Office')
  ],
}

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
),document.getElementById('App'));
