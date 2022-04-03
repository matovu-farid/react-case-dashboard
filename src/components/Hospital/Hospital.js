import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeHospital } from '../../redux/hospitals/hospitals';
import MyListItem from '../ListItem';
import './Hospital.css';

const Hospital = ({ name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const remove = () => {
    dispatch(removeHospital(id));
  };

  const edit = () => {
    navigate(`/entry/${id}`);
  };
  return (
    <MyListItem name={name} functions={{ edit, remove }} />
  );
};
Hospital.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default Hospital;
