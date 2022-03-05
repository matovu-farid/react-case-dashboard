import './Hospitals.css';

import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Hospital from '../../components/Hospital';

const Hospitals = () => {
  const data = useSelector((state) => state.hospitals);

  return (
    <ul className="provider-list">
      {
        data.map(({ name, id }) => (<Hospital id={id} key={uuidv4()} name={name} />))
      }

    </ul>
  );
};
export default Hospitals;
