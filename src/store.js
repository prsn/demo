import { createStore, applyMiddleware, compose } from 'redux'
import Reducers from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  duration: true
});

const store = createStore(
  Reducers,
  applyMiddleware(thunk, logger)
);

export default store;
