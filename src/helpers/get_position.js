import { GeoPoint } from 'firebase/firestore/lite';
import { geohashForLocation } from 'geofire-common';

const getPosition = (latitudeInput, longitudeInput) => {
  const latitude = parseFloat(latitudeInput);
  const longitude = parseFloat(longitudeInput);
  const hash = geohashForLocation([latitude, longitude]);

  const point = new GeoPoint(latitude, longitude);
  return {
    geohash: hash,
    geopoint: point,
  };
};
export default getPosition;
