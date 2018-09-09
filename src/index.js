import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware  from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import reducer from 'reducers';
import Routes from 'Routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {
  watchAuth,
  watchTodo,
} from 'sagas';


const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(reducer),
  composeEnhancer(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchTodo);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
