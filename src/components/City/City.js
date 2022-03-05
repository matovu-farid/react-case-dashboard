import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeCity } from '../../redux/cities/cities';
import ListItem from '../ListItem/ListItem';

const City = ({ name, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onRemove = () => {
    dispatch(removeCity(id));
  };

  const onEdit = () => {
    navigate(`/cityentry/${id}`);
  };
  return (
    <ListItem name={name} onEdit={onEdit} onRemove={onRemove} />
  );
};
City.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};
export default City;
