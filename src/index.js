import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import reducer from 'reducers';
import Routes from 'Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


const history = createHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
    ),
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
