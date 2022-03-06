import './ListItem.css';
import propTypes from 'prop-types';

const ListItem = ({ name, onEdit, onRemove }) => (
  <li className="item">
    <p>{name}</p>
    <div className="button-list">
      <button onClick={onRemove} type="button">Remove</button>
      <button onClick={onEdit} type="button">Edit</button>
    </div>
  </li>
);
ListItem.propTypes = {
  name: propTypes.string.isRequired,
  onEdit: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};
export default ListItem;
