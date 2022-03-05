import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import hospitalsReducer from './hospitals/hospitals';
import citysReducer from './cities/cities';
import hospitalsByCityReducer from './hospitals/hospital_by_city';

const reducer = combineReducers({
  hospitals: hospitalsReducer,
  cities: citysReducer,
  hopitalsByCity: hospitalsByCityReducer,
});
const store = createStore(reducer, applyMiddleware(logger, thunk));
export default store;
