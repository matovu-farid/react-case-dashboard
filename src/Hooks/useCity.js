import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useCity = () => {
  const [name, setName] = useState('');
  const [longitude, setLongitude] = useState('');
  const { id } = useParams();
  const [latitude, setLatitude] = useState('');
  const [radius, setRadius] = useState('');
  const item = useSelector((state) => state.cities).find((city) => city.id === id);
  useEffect(() => {
    if (item) {
      const { name, radius, position: { geopoint: { latitude, longitude } } } = item;
      setName(name);
      setLatitude(latitude);
      setLongitude(longitude);
      setRadius(radius);
    }
  }, []);
  return {
    id, item, name, setName, longitude, setLongitude, latitude, setLatitude, radius, setRadius,
  };
};
export default useCity;
