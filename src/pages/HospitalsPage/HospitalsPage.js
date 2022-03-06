import { useSelector } from 'react-redux';
import Hospitals from '../../components/Hospitals/Hospitals';

const HospitalsPage = () => {
  const data = useSelector((state) => state.hospitals);

  return (
    <Hospitals data={data} />
  );
};
export default HospitalsPage;
