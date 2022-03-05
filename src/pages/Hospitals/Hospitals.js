import './Hospitals.css';

import { useSelector } from 'react-redux';
import Hospital from '../../components/Hospital/Hospital';

const Hospitals = () => {
  const data = useSelector((state) => state.hospitals);

  return (
    <ul className="provider-list">
      {
        data.map(({ name, id }) => (<Hospital id={id} key={id} name={name} />))
      }

    </ul>
  );
};
export default Hospitals;
