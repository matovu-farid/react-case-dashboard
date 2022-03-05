import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHospital } from '../../redux/hospitals/hospitals';
import ListItem from '../ListItem/ListItem';
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
    <ListItem name={name} onEdit={onEdit} onRemove={onRemove} />
  );
};
Hospital.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default Hospital;
