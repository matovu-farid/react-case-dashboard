import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CityListItem = ({
  name, onEdit, onRemove, id,
}) => {
  const navigate = useNavigate();
  const seeHospitals = () => {
    navigate(`/cities/${id}`);
  };
  return (
    <li className="item">
      <p>{name}</p>
      <div className="button-list">
        <button onClick={onRemove} type="button">Remove</button>
        <button onClick={onEdit} type="button">Edit</button>
        <button onClick={seeHospitals} type="button">Clinics</button>
      </div>
    </li>
  );
};
CityListItem.propTypes = {
  name: propTypes.string.isRequired,
  onEdit: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};
export default CityListItem;
