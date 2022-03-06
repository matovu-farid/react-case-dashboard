import { useEffect, useState } from 'react';
import './Entry.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addHospital, updateHospital } from '../../redux/hospitals/hospitals';
import getPosition from '../../helpers/get_position';

const Entry = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [longitudeInput, setLongitude] = useState('');
  const { id } = useParams();
  const [latitudeInput, setLatitude] = useState('');

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
      position: getPosition(latitudeInput, longitudeInput),
    };
    if (item) dispatch(updateHospital({ ...hospital, id }));
    else dispatch(addHospital(hospital));
  };
  const viewOnMap = () => {
    if (latitudeInput && longitudeInput) {
      const url = `https://www.google.co.ug/maps/@${latitudeInput},${longitudeInput},15z`;
      window.open(url, '_blank');
    }
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

export default Entry;
