import {
  addDoc, collection, deleteDoc, doc, getDocs, updateDoc,
} from 'firebase/firestore/lite';

import { db } from '../../firebase/firebase';

const ADD_CITY = 'CITIES/ADD_CITY';
const UPDATE_CITY = 'CITIES/UPDATE_CITY';
const REMOVE_CITY = 'CITIES/REMOVE_CITY';
const FETCH_CITIES = 'CITIES/FETCH';
const CITIES = 'cities';

export const addCity = (payload) => async (dispatch) => {
  const { id } = await addDoc(collection(db, CITIES), payload);

  dispatch({
    type: ADD_CITY,
    payload: { ...payload, id },
  });
};

export const updateCity = (payload) => async (dispatch) => {
  await updateDoc(doc(db, `${CITIES}/${payload.id}`), payload);

  dispatch({
    type: UPDATE_CITY,
    payload,
  });
};

export const removeCity = (payload) => async (dispatch) => {
  await deleteDoc(doc(db, `${CITIES}/${payload}`));
  dispatch({
    type: REMOVE_CITY,
    payload,
  });
};

export const fetchCities = () => async (dispatch) => {
  const { docs } = await getDocs(collection(db, CITIES));
  const payload = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  dispatch({
    type: FETCH_CITIES,
    payload,
  });
};

const citysReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CITY: return [...state, action.payload];
    case REMOVE_CITY: return state.filter((city) => city.id !== action.payload);
    case FETCH_CITIES: return action.payload;
    case UPDATE_CITY: return state.map((city) => {
      if (city.id === action.payload.id) {
        return action.payload;
      }
      return city;
    });
    default: return state;
  }
};

export default citysReducer;
