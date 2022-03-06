import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hospital from '../../components/Hospital/Hospital';
import useCity from '../../Hooks/useCity';
import { fetchWithinRange } from '../../redux/hospitals/hospital_by_city';

const HospitalsByCity = () => {
  const dispatch = useDispatch();
  const { latitude, longitude } = useCity();
  useEffect(() => {
    dispatch(fetchWithinRange({ latitude, longitude, radius: 500 }));
  }, []);
  const data = useSelector((state) => state.hospitalsByCityReducer);
  return (
    <ul className="provider-list">
      {
        data.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
      }

    </ul>
  );
};
export default HospitalsByCity;
