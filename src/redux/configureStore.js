import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import hospitalsReducer from './hospitals/hospitals';

const reducer = combineReducers({ hospitalsReducer });
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
