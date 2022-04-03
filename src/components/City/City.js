import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCity } from '../../redux/cities/cities';
import MyListItem from '../ListItem';

const City = ({ name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const remove = () => {
    dispatch(removeCity(id));
  };

  const edit = () => {
    navigate(`/cityentry/${id}`);
  };
  const view = () => {
    navigate(`/cities/${id}`);
  };
  return (
    <MyListItem id={id} name={name} functions={{ edit, remove, view }} />
  );
};
City.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default City;
