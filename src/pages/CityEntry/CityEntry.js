import { useDispatch } from 'react-redux';
import { addCity, updateCity } from '../../redux/cities/cities';
import getPosition from '../../helpers/get_position';
import useCity from '../../Hooks/useCity';

const CityEntry = () => {
  const {

    id, item, name, setName, longitude, setLongitude, latitude, setLatitude, radius, setRadius,
  } = useCity();
  const dispatch = useDispatch();

  const viewOnMap = () => {
    if (latitude && longitude) {
      const url = `https://www.google.co.ug/maps/@${latitude},${longitude},15z`;
      window.open(url, '_blank');
    }
  };
  const onClick = () => {
    const city = {
      name,
      radius,
      position: getPosition(latitude, longitude),
    };
    if (item) dispatch(updateCity({ ...city, id }));
    else dispatch(addCity(city));
  };
  return (
    <form>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="City" name="name" className="input" required />
      <input type="text" value={radius} onChange={(e) => setRadius(e.target.value)} placeholder="Radius" className="input" required />
      <fieldset>
        <legend>Location</legend>
        <label htmlFor="latitude">Latitude</label>
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} name="latitude" className="input" placeholder="1.3733" required pattern="\d{1}\.\d+" />

        <label htmlFor="longitude">Longitude</label>
        <input type="text" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} name="longitude" className="input" placeholder="32.2903" required pattern="3\d{1}\.\d+" />

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
