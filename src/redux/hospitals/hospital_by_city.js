import {
  collection, endAt, getDocs, orderBy, query, startAt, updateDoc,
} from 'firebase/firestore/lite';
import { geohashQueryBounds } from 'geofire-common';
import { db } from '../../firebase/firebase';

const HEALTH_PROVIDERS = 'health_providers';
const FETCH_HOSPITALSBYCITY = 'CITY/HOSPITALS/FETCH';
export const popGeohash = async () => {
  const snaps = await getDocs(collection(db, 'cities'));

  const arr = snaps.docs.map((doc) => updateDoc(doc.ref, {
    radius: 5000,
  }));

  Promise.all(arr);
};
export const fetchWithinRange = ({ latitude, longitude, radius }) => async (dispatch) => {
  // Find cities within 50km of London
  const center = [parseFloat(latitude), parseFloat(longitude)];

  const bounds = geohashQueryBounds(center, parseFloat(radius));
  const promises = bounds.map((bound) => {
    const q = query(collection(db, HEALTH_PROVIDERS),
      orderBy('geohash'), startAt(bound[0]), endAt(bound[1]));

    return getDocs(q);
  });

  // Collect all the query results together into a single list
  const snapshots = await Promise.all(promises);
  const matchingDocs = [];

  snapshots.forEach((snap) => {
    snap.docs.forEach((doc) => {
      matchingDocs.push(doc);
    });
  });

  const payload = matchingDocs.map((doc) => ({ ...doc.data(), id: doc.id }));
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
