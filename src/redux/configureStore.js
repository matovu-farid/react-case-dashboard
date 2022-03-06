import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import hospitalsReducer from './hospitals/hospitals';
import citysReducer from './cities/cities';
import hospitalsByCityReducer from './hospitals/hospital_by_city';

const reducer = combineReducers({
  hospitals: hospitalsReducer,
  cities: citysReducer,
  hospitalsByCity: hospitalsByCityReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
