import { useEffect, useState } from 'react';

import { geohashForLocation } from 'geofire-common';
import { GeoPoint } from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCity, updateCity } from '../../redux/cities/cities';

const CityEntry = () => {
  const [name, setName] = useState('');
  const [longitudeInput, setLongitude] = useState('');
  const { id } = useParams();
  const [latitudeInput, setLatitude] = useState('');
  const getPosition = () => {
    const latitude = parseFloat(latitudeInput);
    const longitude = parseFloat(longitudeInput);
    const hash = geohashForLocation([latitude, longitude]);

    const point = new GeoPoint(latitude, longitude);
    return {
      geohash: hash,
      geopoint: point,
    };
  };

  const item = useSelector((state) => state.cities).find((city) => city.id === id);
  useEffect(() => {
    if (item) {
      const { name, position: { geopoint: { latitude, longitude } } } = item;
      setName(name);
      setLatitude(latitude);
      setLongitude(longitude);
    }
  }, []);
  const dispatch = useDispatch();

  const viewOnMap = () => {
    if (latitudeInput && longitudeInput) {
      const url = `https://www.google.co.ug/maps/@${latitudeInput},${longitudeInput},15z`;
      window.open(url, '_blank');
    }
  };
  const onClick = () => {
    const city = {
      name,
      position: getPosition(),
    };
    if (item) dispatch(updateCity({ ...city, id }));
    else dispatch(addCity(city));
  };
  return (
    <form>
      <label htmlFor="name">City</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" className="input" required />
      <fieldset>
        <legend>Location</legend>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" value={latitudeInput} onChange={(e) => setLatitude(e.target.value)} name="latitude" className="input" placeholder="1.3733" required pattern="\d{1}\.\d+" />

        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" value={longitudeInput} onChange={(e) => setLongitude(e.target.value)} name="longitude" className="input" placeholder="32.2903" required pattern="3\d{1}\.\d+" />

      </fieldset>
      {
        (id !== 'item') ? (

          <div className="entry-buttons">
            <button onClick={onClick} type="button">Add</button>
            <button onClick={viewOnMap} type="button">View</button>
          </div>
        ) : <button onClick={viewOnMap} type="button">View</button>
}

    </form>
  );
};

export default CityEntry;
