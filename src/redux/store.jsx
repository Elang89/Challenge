import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import app from './reducers/app';

const logger = createLogger();

const store = createStore(
  app,
  compose(
    applyMiddleware(routerMiddleware(browserHistory), thunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
