import {
  addDoc, collection, deleteDoc, doc, getDocs, updateDoc,
} from 'firebase/firestore/lite';
import { db } from '../../firebase/firebase';

const ADD_HOSPITAL = 'HOSPITALS/ADD_HOSPITAL';
const UPDATE_HOSPITAL = 'HOSPITALS/UPDATE_HOSPITAL';
const REMOVE_HOSPITAL = 'HOSPITALS/REMOVE_HOSPITAL';
const FETCH_HOSPITALS = 'HOSPITALS/FETCH';
const HEALTH_PROVIDERS = 'health_provider';

export const addHospital = (payload) => async (dispatch) => {
  const { id } = await addDoc(collection(db, HEALTH_PROVIDERS), payload);

  dispatch({
    type: ADD_HOSPITAL,
    payload: { ...payload, id },
  });
};

export const updateHospital = (payload) => async (dispatch) => {
  await updateDoc(doc(db, `${HEALTH_PROVIDERS}/${payload.id}`), payload);

  dispatch({
    type: UPDATE_HOSPITAL,
    payload,
  });
};

export const removeHospital = (payload) => async (dispatch) => {
  await deleteDoc(doc(db, `${HEALTH_PROVIDERS}/${payload}`));
  dispatch({
    type: REMOVE_HOSPITAL,
    payload,
  });
};

export const fetchHospitals = () => async (dispatch) => {
  const { docs } = await getDocs(collection(db, HEALTH_PROVIDERS));
  const payload = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  dispatch({
    type: FETCH_HOSPITALS,
    payload,
  });
};

const hospitalsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_HOSPITAL: return [...state, action.payload];
    case REMOVE_HOSPITAL: return state.filter((hospital) => hospital.id !== action.payload);
    case FETCH_HOSPITALS: return action.payload;
    case UPDATE_HOSPITAL: return state.map((hospital) => {
      if (hospital.id === action.payload.id) {
        return action.payload;
      }
      return hospital;
    });
    default: return state;
  }
};

export default hospitalsReducer;
