import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Hospitals from '../../components/Hospitals/Hospitals';
import useCity from '../../Hooks/useCity';
import { fetchWithinRange } from '../../redux/hospitals/hospital_by_city';

const HospitalsByCity = () => {
  const dispatch = useDispatch();
  const { latitude, longitude, radius } = useCity();

  useEffect(() => {
    if (latitude && longitude) {
      dispatch(fetchWithinRange(

        {
          latitude,
          longitude,
          radius,
        },
      ));
    }
  }, [latitude, longitude]);
  const data = useSelector((state) => state.hospitalsByCity);
  return (
    <Hospitals data={data} />
  );
};
export default HospitalsByCity;
