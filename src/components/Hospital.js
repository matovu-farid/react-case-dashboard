import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHospital } from '../redux/hospitals/hospitals';
import './Hospital.css';

const Hospital = ({ name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRemove = () => {
    dispatch(removeHospital(id));
  };

  const onEdit = () => {
    navigate(`/entry/${id}`);
  };
  return (
    <li className="hospital-item">
      <p>{name}</p>
      <div className="button-list">
        <button onClick={onRemove} type="button">Remove</button>
        <button onClick={onEdit} type="button">Edit</button>
      </div>
    </li>
  );
};
Hospital.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default Hospital;
