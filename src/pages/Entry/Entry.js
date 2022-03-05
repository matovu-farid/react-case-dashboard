import { useEffect, useState } from 'react';
import './Entry.css';
import { geohashForLocation } from 'geofire-common';
import { GeoPoint } from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addHospital, updateHospital } from '../../redux/hospitals/hospitals';

const Entry = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
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

  const item = useSelector((state) => state.hospitals).find((hospital) => hospital.id === id);
  useEffect(() => {
    if (item) {
      const { name, contact, position: { geopoint: { latitude, longitude } } } = item;
      setContact(contact);
      setName(name);
      setLatitude(latitude);
      setLongitude(longitude);
    }
  }, []);
  const dispatch = useDispatch();
  const onClick = () => {
    const hospital = {
      name,
      contact,
      position: getPosition(),
    };
    if (item) dispatch(updateHospital({ ...hospital, id }));
    else dispatch(addHospital(hospital));
  };
  return (
    <form>
      <label htmlFor="name">Hospital Name</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" className="input" required />
      <label htmlFor="contact">Contact</label>
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} name="contact" className="input" required />
      <fieldset>
        <legend>Location</legend>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" value={latitudeInput} onChange={(e) => setLatitude(e.target.value)} name="latitude" className="input" placeholder="1.3733" required pattern="\d{1}\.\d+" />

        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" value={longitudeInput} onChange={(e) => setLongitude(e.target.value)} name="longitude" className="input" placeholder="32.2903" required pattern="3\d{1}\.\d+" />

      </fieldset>
      <button onClick={onClick} type="button">Add</button>
    </form>
  );
};

export default Entry;
