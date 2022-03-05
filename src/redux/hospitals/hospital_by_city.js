import {
  GeoPoint,
} from 'firebase/firestore/lite';
import { GeoFirestore } from '../../firebase/firebase';

const HEALTH_PROVIDERS = 'health_providers';
const FETCH_HOSPITALSBYCITY = 'CITY/HOSPITALS/FETCH';
export const fetchWithinRange = ({ latitude, longitude, radius }) => async (dispatch) => {
  const geoCollection = GeoFirestore.collection(HEALTH_PROVIDERS);
  const query = geoCollection.near({
    center: new GeoPoint(latitude, longitude),
    radius,
  });
  const payload = (await query.get()).docs.map((doc) => doc.data());
  dispatch({
    type: FETCH_HOSPITALSBYCITY,
    payload,
  });
};

const hospitalsByCityReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_HOSPITALSBYCITY: return action.payload;
    default: return state;
  }
};
export default hospitalsByCityReducer;
