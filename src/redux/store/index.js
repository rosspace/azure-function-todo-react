import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import items from '../items';
import middleware from '../middleware';

// noinspection JSUnresolvedVariable
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  items,
});

const appState = {};

const store = createStore(
  rootReducer,
  appState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
